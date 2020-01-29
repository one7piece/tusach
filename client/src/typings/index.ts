export * from './tusach_pb'; 
export * from './TusachServiceClientPb'; 
import * as model from './tusach_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export function getBookStatusAsString(status: model.BookStatusType) {
  switch (+status) {
    case model.BookStatusType.ABORTED:
      return "ABORTED";
    case model.BookStatusType.COMPLETED:
      return "COMPLETED";
    case model.BookStatusType.ERROR:
      return "ERROR";
    case model.BookStatusType.IN_PROGRESS:
      return "IN_PROGRESS";
    default:
      return "";
  }
}

export function getBookStatusFromString(str: String) {
  var status = model.BookStatusType.ERROR;
  if (str == "ABORTED") {
    status = model.BookStatusType.ABORTED;
  } else if (str == "COMPLETED") {
    status = model.BookStatusType.COMPLETED;
  } else if (str == "IN_PROGRESS") {
    status = model.BookStatusType.IN_PROGRESS;
  }
  return status;
}

export function toGoogleTime(obj: any) : google_protobuf_timestamp_pb.Timestamp {
  var timestamp = new google_protobuf_timestamp_pb.Timestamp()
  if (obj) {
    if (typeof obj == "string") {
      timestamp.fromDate(new Date(<string>obj));
    } else if (obj.seconds && obj.nanos) {
      timestamp.setSeconds(obj.seconds);
      timestamp.setNanos(obj.nanos);
    }
  }
  return timestamp;
}

export function toJsonTime(t: google_protobuf_timestamp_pb.Timestamp) : String {
  var str = new Date(t.seconds*1000 + t.nanos/1000000).toJSON();        
  return str;
}

export function toJsonBook(book: model.Book) : Object {
  let obj = { 
    id: book.getId(),
    author: book.getAuthor(),
    title: book.getTitle(),
    buildTimeSec: book.getBuildTimeSec(),
    createdBy: book.getCreatedBy(),
    currentPageNo: book.getCurrentPageNo(),
    currentPageUrl: book.getCurrentPageUrl(),
    deleted: book.getDeleted(),
    errorMsg: book.getErrorMsg(),
    epubCreated: book.getEpubCreated(),
    maxNumPages: book.getMaxNumPages(),
    startPageUrl: book.getStartPageUrl(),
    status: getBookStatusAsString(book.getStatus()),
    createdTime: toJsonTime(book.getCreatedTime()),
    lastUpdatedTime: toJsonTime(book.getLastUpdatedTime())
   };

  return obj;
}

export function toGrpcBook(obj: any) : model.Book {
  let book = new model.Book();
  book.setId(obj.id);
  book.setAuthor(obj.author);
  book.setTitle(obj.title);
  book.setBuildTimeSec(obj.buildTimeSec);
  book.setCreatedBy(obj.createdBy);
  book.setCurrentPageNo(obj.currentPageNo);
  book.setCurrentPageUrl(obj.currentPageUrl);
  book.setDeleted(obj.deleted);
  book.setEpubCreated(obj.epubCreated);
  book.setErrorMsg(obj.errorMsg);
  book.setMaxNumPages(obj.maxNumPages);
  book.setStartPageUrl(obj.startPageUrl);
  book.setStatus(getBookStatusFromString(obj.status));
  book.setCreatedTime(toGoogleTime(obj.createdTime));
  book.setLastUpdatedTime(toGoogleTime(obj.lastUpdatedTime));
  return book;
}

export function toGrpcBookList(obj: any) : model.BookList {
  let bookList = new model.BookList();
  bookList.setIsFullList(obj.isFullList);
  for (let i=0; i<obj.books.length; i++) {
    bookList.addBooks(toGrpcBook(obj.books[i]));
  }
  return bookList;
}

