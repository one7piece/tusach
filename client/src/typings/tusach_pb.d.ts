export class Empty {
  constructor ();
  toObject(): Empty.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Timestamp {
  constructor ();
  getSeconds(): number;
  setSeconds(a: number): void;
  getNanos(): number;
  setNanos(a: number): void;
  toObject(): Timestamp.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    Seconds: number;
    Nanos: number;
  }
}

export class Book {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getStatus(): BookStatusType;
  setStatus(a: BookStatusType): void;
  getTitle(): string;
  setTitle(a: string): void;
  getAuthor(): string;
  setAuthor(a: string): void;
  getCreatedtime(): Timestamp;
  setCreatedtime(a: Timestamp): void;
  getCreatedby(): string;
  setCreatedby(a: string): void;
  getBuildtimesec(): number;
  setBuildtimesec(a: number): void;
  getStartpageurl(): string;
  setStartpageurl(a: string): void;
  getCurrentpageurl(): string;
  setCurrentpageurl(a: string): void;
  getCurrentpageno(): number;
  setCurrentpageno(a: number): void;
  getMaxnumpages(): number;
  setMaxnumpages(a: number): void;
  getLastupdatedtime(): Timestamp;
  setLastupdatedtime(a: Timestamp): void;
  getErrormsg(): string;
  setErrormsg(a: string): void;
  getEpubcreated(): boolean;
  setEpubcreated(a: boolean): void;
  getDeleted(): boolean;
  setDeleted(a: boolean): void;
  toObject(): Book.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Book;
}

export namespace Book {
  export type AsObject = {
    Id: number;
    Status: BookStatusType;
    Title: string;
    Author: string;
    Createdtime: Timestamp;
    Createdby: string;
    Buildtimesec: number;
    Startpageurl: string;
    Currentpageurl: string;
    Currentpageno: number;
    Maxnumpages: number;
    Lastupdatedtime: Timestamp;
    Errormsg: string;
    Epubcreated: boolean;
    Deleted: boolean;
  }
}

export class BookList {
  constructor ();
  getBooksList(): Book[];
  setBooksList(a: Book[]): void;
  getIsfulllist(): boolean;
  setIsfulllist(a: boolean): void;
  toObject(): BookList.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => BookList;
}

export namespace BookList {
  export type AsObject = {
    BooksList: Book[];
    Isfulllist: boolean;
  }
}

