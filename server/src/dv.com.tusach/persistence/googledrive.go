package persistence

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/util"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/drive/v3"
)

type DriveBookMeta struct {
	FileId   string
	FileName string
}

type DriveBook struct {
	EpubFile *DriveBookMeta
	JsonFile *DriveBookMeta
	Book     *model.Book
}

type GoogleDriveStore struct {
	oauthServiceRes *util.OAuthServiceResource
	service         *drive.Service
	tusachFolderId  string
}

func (drv *GoogleDriveStore) Init() error {
	if util.GetConfiguration().OAuthServiceFile == "" {
		return nil
	}

	data, err := ioutil.ReadFile(util.GetConfiguration().OAuthServiceFile)
	if err != nil {
		logger.Errorf("Unable to read service account file: %s. %v", util.GetConfiguration().OAuthServiceFile, err)
		return err
	}
	config, err := google.JWTConfigFromJSON(data, drive.DriveScope)
	if err != nil {
		logger.Errorf("Unable to parse service file to config: %v", err)
		return err
	}

	client := config.Client(context.Background())
	service, err := drive.New(client)
	if err != nil {
		fmt.Printf("Cannot create the Google Drive service: %v\n", err)
		return err
	}

	folderList, err := service.Files.List().Q("mimeType = 'application/vnd.google-apps.folder'").Q("name = 'Tusach'").Do()
	if err != nil {
		logger.Infof("Error listing Google Drive folders: %v\n", err)
		return err
	}
	if len(folderList.Files) != 1 {
		logger.Infof("number of Google Drive folder with name 'Tusach': %d\n", len(folderList.Files))
		return err
	}
	drv.tusachFolderId = folderList.Files[0].Id
	drv.service = service
	logger.Infof("found Google Drive folder Tusach: %s\n", drv.tusachFolderId)

	return nil
}

func (drv *GoogleDriveStore) LoadBooks() ([]DriveBook, error) {
	if drv.tusachFolderId == "" {
		return nil, errors.New("Missing tusach folder FileId")
	}

	fileList, err := drv.service.Files.List().Q("'" + drv.tusachFolderId + "' in parents").Do()
	if err != nil {
		logger.Infof("Error listing Google Drive files: %v\n", err)
		return nil, err
	}
	fmt.Printf("number of Google Drive Tusach files: %d\n", len(fileList.Files))
	arr := []DriveBook{}

	for _, f := range fileList.Files {
		if strings.HasSuffix(f.Name, ".json") {
			book := DriveBook{Book: &model.Book{}}
			book.JsonFile = &DriveBookMeta{FileId: f.Id, FileName: f.Name}
			data, err := drv.DownloadFile(book.JsonFile)
			if err != nil {
				logger.Infof("failed to download book meta %s: %v\n", f.Name, err)
				return nil, err
			}
			err = json.Unmarshal(data, &book.Book)
			if err != nil {
				logger.Infof("Error unmarshall book json file %s: %v\n", f.Name, err)
				return nil, err
			}
			// check for correct file name
			expectedFilename := filepath.Base(GetBookMetaFilename(*book.Book))
			if expectedFilename == book.JsonFile.FileName {
				logger.Infof("found google drive book: %v\n", *book.Book)
				arr = append(arr, book)
			} else {
				logger.Errorf("Mismatched JSON file name, expecting %s, found %s\n", expectedFilename, book.JsonFile.FileName)
			}

		}
	}
	result := []DriveBook{}
	for _, book := range arr {
		epubFilename := filepath.Base(GetBookEpubFilename(*book.Book))
		for _, f := range fileList.Files {
			if epubFilename == f.Name {
				logger.Infof("found epub file: %s/%s MimeType:%s\n", f.Name, f.Id, f.MimeType)
				book.EpubFile = &DriveBookMeta{FileId: f.Id, FileName: f.Name}
				result = append(result, book)
				break
			}
		}
	}

	return result, nil
}

func (drv *GoogleDriveStore) DownloadFile(f *DriveBookMeta) ([]byte, error) {
	logger.Infof("download Google Drive file: %s\n", f.FileName)
	resp, err := drv.service.Files.Get(f.FileId).Download()
	if err != nil {
		logger.Errorf("Error downloading Google Drive file %s: %v\n", f.FileName, err)
		return nil, err
	}
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		logger.Errorf("Error reading Google Drive file %s: %v\n", f.FileName, err)
		return nil, err
	}
	logger.Infof("successfully downloaded %s, size:%d\n", f.FileName, len(data))
	return data, nil
}

func (drv *GoogleDriveStore) StoreBook(book model.Book) error {
	arr := []model.Book{book}
	return drv.StoreBooks(arr)
}

func (drv *GoogleDriveStore) StoreBooks(books []model.Book) error {
	if drv.tusachFolderId == "" {
		return errors.New("Missing tusach folder FileId")
	}
	currentBooks, err := drv.LoadBooks()
	if err != nil {
		return err
	}

	for _, book := range books {
		if err = drv.uploadBook(&book, currentBooks); err != nil {
			// continue
		}
	}

	return nil
}

func (drv *GoogleDriveStore) uploadBook(book *model.Book, currentBooks []DriveBook) error {
	jsonLocalPath := GetBookMetaFilename(*book)
	jsonFileName := jsonLocalPath[len(util.GetConfiguration().LibraryPath+"/books/"):]
	epubLocalPath := GetBookEpubFilename(*book)
	epubFileName := epubLocalPath[len(util.GetConfiguration().LibraryPath+"/books/"):]

	var currentBook *DriveBook
	for _, b := range currentBooks {
		if b.EpubFile != nil && b.JsonFile.FileName == jsonFileName {
			currentBook = &b
			break
		}
	}

	jsonMediaFile, err := os.Open(jsonLocalPath)
	if err != nil {
		logger.Errorf("Failed to open book json file %s. %s\n", jsonLocalPath, err)
		return err
	}
	epubMediaFile, err := os.Open(epubLocalPath)
	if err != nil {
		logger.Errorf("Failed to open book epub file %s. %s\n", epubLocalPath, err)
		return err
	}

	pendingDeleteFileIds := []string{}
	defer func() {
		// remove any intermediate files
		for _, fileId := range pendingDeleteFileIds {
			logger.Warnf("Removed created file: %s\n", fileId)
			drv.service.Files.Delete(fileId).Do()
		}
	}()

	jsonFile := &drive.File{Name: jsonFileName, MimeType: "text/plain"}
	epubFile := &drive.File{Name: epubFileName, MimeType: "application/epub+zip"}

	if currentBook == nil {
		jsonFile.Parents = []string{drv.tusachFolderId}
		epubFile.Parents = []string{drv.tusachFolderId}

		// create new Json file
		logger.Infof("creating json file: %s\n", epubFile.Name)
		createdFile, err := drv.service.Files.Create(jsonFile).Media(jsonMediaFile).Do()
		if err != nil {
			logger.Infof("error creating json file: %s\n", err)
			return err
		}
		logger.Infof("created json file: %s, fileId:%s\n", epubFile.Name, createdFile.Id)
		pendingDeleteFileIds = append(pendingDeleteFileIds, createdFile.Id)

		// create new Epub file
		logger.Infof("creating epub file: %s\n", epubFile.Name)
		createdFile, err = drv.service.Files.Create(epubFile).Media(epubMediaFile).Do()
		if err != nil {
			logger.Infof("error creating epub file: %s\n", err)
			return err
		}
		logger.Infof("created epub file: %s, fileId:%s\n", epubFile.Name, createdFile.Id)
		pendingDeleteFileIds = []string{}
	} else {
		// update exiting files
		//jsonFile.Id = currentBook.JsonFile.FileId
		//epubFile.Id = currentBook.EpubFile.FileId
		logger.Infof("updating json file: %s\n", epubFile.Name)
		updatedFile, err := drv.service.Files.Update(currentBook.JsonFile.FileId, jsonFile).Media(jsonMediaFile).Do()
		if err != nil {
			logger.Infof("error updating json file: %s\n", err)
			return err
		}
		logger.Infof("updated json file: %s, fileId:%s\n", epubFile.Name, updatedFile.Id)

		// update new Epub file
		logger.Infof("updating epub file: %s\n", epubFile.Name)
		updatedFile, err = drv.service.Files.Update(currentBook.EpubFile.FileId, epubFile).Media(epubMediaFile).Do()
		if err != nil {
			logger.Infof("error updating epub file: %s\n", err)
			return err
		}
		logger.Infof("updated epub file: %s, fileId:%s\n", epubFile.Name, updatedFile.Id)
	}

	return nil
}
