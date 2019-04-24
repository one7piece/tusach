export * from './tusach_pb'; 
export * from './TusachServiceClientPb'; 
import * as model from './tusach_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class BookObject {
  ID: number;
  status: model.BookStatusType;
  title: string;
  author: string;
  createdTime: string;
  createdBy: string;
  buildTimeSec: number;
  startPageUrl: string;
  currentPageUrl: string;
  currentPageNo: number;
  maxNumPages: number;
  lastUpdatedTime: string;
  errorMsg: string;
  epubCreated: boolean;
  deleted: boolean;

  public static fromObject(obj: BookObject) : model.Book {
    let book = new model.Book();
    book.setId(obj.ID);
    if (obj.author) {
      book.setAuthor(obj.author);
    }
    if (obj.title) {
      book.setTitle(obj.title);
    }
    if (obj.buildTimeSec) {
      book.setBuildTimeSec(obj.buildTimeSec);
    }
    if (obj.createdBy) {
      book.setCreatedBy(obj.createdBy);
    }
    if (obj.createdTime) {
      var timestamp = new google_protobuf_timestamp_pb.Timestamp()
      timestamp.fromDate(new Date(obj.createdTime));
      book.setCreatedTime(timestamp);
    }
    if (obj.currentPageNo) {
      book.setCurrentPageNo(obj.currentPageNo);
    }
    if (obj.currentPageUrl) {
      book.setCurrentPageUrl(obj.currentPageUrl);
    }
    if (obj.deleted) {
      book.setDeleted(obj.deleted);
    }
    if (obj.epubCreated) {
      book.setEpubCreated(obj.epubCreated);
    }
    if (obj.errorMsg) {
      book.setErrorMsg(obj.errorMsg);
    }
    if (obj.lastUpdatedTime) {
      var timestamp = new google_protobuf_timestamp_pb.Timestamp()
      timestamp.fromDate(new Date(obj.lastUpdatedTime));
      book.setLastUpdatedTime(timestamp);
    }
    if (obj.maxNumPages) {
      book.setMaxNumPages(obj.maxNumPages);
    }
    if (obj.startPageUrl) {
      book.setStartPageUrl(obj.startPageUrl);
    }
    if (obj.status) {
      book.setStatus(obj.status);
    }
    return book;
  }
  public static toObject(book: model.Book) : BookObject {
    let obj = new BookObject();
    obj.ID = book.getId();
    obj.title = book.getTitle();
    obj.author = book.getAuthor();
    obj.buildTimeSec = book.getBuildTimeSec();
    obj.createdBy = book.getCreatedBy();
    obj.createdTime = book.getCreatedTime();
    obj.currentPageNo = book.getCurrentPageNo();
    obj.deleted = book.getDeleted();
    obj.epubCreated = book.getEpubCreated();
    obj.errorMsg = book.getErrorMsg();
    obj.lastUpdatedTime = book.getLastUpdatedTime();
    obj.maxNumPages = book.getMaxNumPages();
    obj.startPageUrl = book.getStartPageUrl();
    obj.status = book.getStatus();
    return obj;
  }
}

export class BookListObject {
  books: BookObject[];
  isFullList: boolean;
  
  public static fromObject(obj: BookListObject) : model.BookList{
    let bookList = new model.BookList();
    bookList.setIsFullList(obj.isFullList);
    for (let i=0; i<obj.books.length; i++) {
      bookList.addBooks(BookObject.fromObject(obj.books[i]));
    }
    return bookList;
  }
}
