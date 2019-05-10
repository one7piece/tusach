import Timestamp from "google-protobuf/google/protobuf/timestamp_pb";
import * as model from '../../typings';

export function timstamp2millis(t : Timestamp) : number {
  if (t) {
    return t.getSeconds()*1000 + t.getNanos()/1000000;
  }
  return 0;
}

export function fromObject(obj: model.Book.AsObject) : model.Book {
  let book = new model.Book();
  book.setId(obj.id);
  book.setAuthor(obj.author);
  book.setBuildTimeSec(obj.buildTimeSec);
  book.setCreatedBy(obj.createdBy);
  book.setCreatedTime(obj.createdTime);
  book.setCurrentPageNo(obj.currentPageNo);
  book.setCurrentPageUrl(obj.currentPageUrl);
  book.setDeleted(obj.deleted);
  book.setEpubCreated(obj.epubCreated);
  book.setErrorMsg(obj.errorMsg);
  book.setLastUpdatedTime(obj.lastUpdatedTime);
  book.setMaxNumPages(obj.maxNumPages);
  book.setStartPageUrl(obj.startPageUrl);
  book.setStatus(obj.status);
  return book;
}