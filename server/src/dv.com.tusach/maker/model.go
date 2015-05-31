package maker

import (
	"time"
)

type SystemInfo struct {
	SystemUpTime       time.Time `json:"systemUpTime"`
	BookLastUpdateTime time.Time `json:"bookLastUpdateTime"`
	ParserEditing      bool      `json:"parserEditing"`
}

type User struct {
	Name          string    `json:"name"`
	Role          string    `json:"role"`
	Password      string    `json:"password"`
	LastLoginTime time.Time `json:"lastLoginTime"`
	SessionId     string    `json:"sessionId" persist:"false"`
}

type ParserScript struct {
	Name           string
	Code           string
	LastUpdateTime time.Time
}

const STATUS_NONE = ""
const STATUS_WORKING = "WORKING"
const STATUS_COMPLETED = "COMPLETED"
const STATUS_ERROR = "ERROR"
const STATUS_ABORTED = "ABORTED"

type Book struct {
	ID             int       `json:"id"`
	Title          string    `json:"title"`
	Author         string    `json:"author"`
	CreatedTime    time.Time `json:"createdTime"`
	CreatedBy      string    `json:"createdBy"`
	Status         string    `json:"status"`
	BuildTimeSec   int       `json:"buildTimeSec"`
	StartPageUrl   string    `json:"startPageUrl"`
	CurrentPageUrl string    `json:"currentPageUrl"`
	CurrentPageNo  int       `json:"currentPageNo"`
	MaxNumPages    int       `json:"maxNumPages"`
	LastUpdateTime time.Time `json:"lastUpdateTime"`
	ErrorMsg       string    `json:"errorMsg"`
	EpubCreated    bool      `json:"epubCreated"`
}

type Chapter struct {
	ChapterNo int
	BookId    int
	Title     string
	Html      []byte         `persist:"false"`
	images    []ChapterImage `persist:"false"`
}

// ByChapterNo implements sort.Interface for []Chapter on the ChapterNo field
type ByChapterNo []Chapter

func (c ByChapterNo) Len() int           { return len(c) }
func (c ByChapterNo) Swap(i, j int)      { c[i], c[j] = c[j], c[i] }
func (c ByChapterNo) Less(i, j int) bool { return c[i].ChapterNo < c[j].ChapterNo }

type ChapterImage struct {
	fileName  string
	imageData []byte
}
