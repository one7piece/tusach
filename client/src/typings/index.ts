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

export interface Adapter<T> {
  adapt(obj: any): T;
}

export class JsonTimestampAdapter implements Adapter<google_protobuf_timestamp_pb.Timestamp> {
  adapt(obj: any): google_protobuf_timestamp_pb.Timestamp {
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
}

export class JsonBookAdapter implements Adapter<model.Book> {
  adapt(obj: any): model.Book {
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
    book.setStatus(obj.status);
    let timestampAdapter = new JsonTimestampAdapter();
    book.setCreatedTime(timestampAdapter.adapt(obj.createdTime));
    book.setLastUpdatedTime(timestampAdapter.adapt(obj.lastUpdatedTime));
    return book;
  }
}

export class JsonBookListAdapter implements Adapter<model.BookList> {
  public bookAdapter = new JsonBookAdapter();

  adapt(obj: any) : model.BookList {
    let bookList = new model.BookList();
    bookList.setIsFullList(obj.isFullList);
    for (let i=0; i<obj.books.length; i++) {
      bookList.addBooks(this.bookAdapter.adapt(obj.books[i]));
    }
    return bookList;
  }
}
