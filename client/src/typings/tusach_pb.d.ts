import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class User extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRoles(): string;
  setRoles(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    name: string,
    roles: string,
  }
}

export class SystemInfo extends jspb.Message {
  getSystemUpTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSystemUpTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasSystemUpTime(): boolean;
  clearSystemUpTime(): void;

  getBookLastUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBookLastUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBookLastUpdatedTime(): boolean;
  clearBookLastUpdatedTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SystemInfo): SystemInfo.AsObject;
  static serializeBinaryToWriter(message: SystemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemInfo;
  static deserializeBinaryFromReader(message: SystemInfo, reader: jspb.BinaryReader): SystemInfo;
}

export namespace SystemInfo {
  export type AsObject = {
    systemUpTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bookLastUpdatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Book extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatus(): BookStatusType;
  setStatus(value: BookStatusType): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedTime(): boolean;
  clearCreatedTime(): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  getBuildTimeSec(): number;
  setBuildTimeSec(value: number): void;

  getStartPageUrl(): string;
  setStartPageUrl(value: string): void;

  getCurrentPageUrl(): string;
  setCurrentPageUrl(value: string): void;

  getCurrentPageNo(): number;
  setCurrentPageNo(value: number): void;

  getMaxNumPages(): number;
  setMaxNumPages(value: number): void;

  getLastUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastUpdatedTime(): boolean;
  clearLastUpdatedTime(): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getEpubCreated(): boolean;
  setEpubCreated(value: boolean): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    id: number,
    status: BookStatusType,
    title: string,
    author: string,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    buildTimeSec: number,
    startPageUrl: string,
    currentPageUrl: string,
    currentPageNo: number,
    maxNumPages: number,
    lastUpdatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errorMsg: string,
    epubCreated: boolean,
    deleted: boolean,
  }
}

export class BookList extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): void;
  clearBooksList(): void;
  addBooks(value?: Book, index?: number): Book;

  getIsFullList(): boolean;
  setIsFullList(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookList.AsObject;
  static toObject(includeInstance: boolean, msg: BookList): BookList.AsObject;
  static serializeBinaryToWriter(message: BookList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookList;
  static deserializeBinaryFromReader(message: BookList, reader: jspb.BinaryReader): BookList;
}

export namespace BookList {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    isFullList: boolean,
  }
}

export class NewBookRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getStartPageUrl(): string;
  setStartPageUrl(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getMaxNumPages(): number;
  setMaxNumPages(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewBookRequest): NewBookRequest.AsObject;
  static serializeBinaryToWriter(message: NewBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBookRequest;
  static deserializeBinaryFromReader(message: NewBookRequest, reader: jspb.BinaryReader): NewBookRequest;
}

export namespace NewBookRequest {
  export type AsObject = {
    title: string,
    startPageUrl: string,
    author: string,
    maxNumPages: number,
  }
}

export class Chapter extends jspb.Message {
  getChapterNo(): number;
  setChapterNo(value: number): void;

  getBookId(): number;
  setBookId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getHtml(): Uint8Array | string;
  getHtml_asU8(): Uint8Array;
  getHtml_asB64(): string;
  setHtml(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chapter.AsObject;
  static toObject(includeInstance: boolean, msg: Chapter): Chapter.AsObject;
  static serializeBinaryToWriter(message: Chapter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chapter;
  static deserializeBinaryFromReader(message: Chapter, reader: jspb.BinaryReader): Chapter;
}

export namespace Chapter {
  export type AsObject = {
    chapterNo: number,
    bookId: number,
    title: string,
    html: Uint8Array | string,
  }
}

export enum BookStatusType { 
  NONE = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  ERROR = 3,
  ABORTED = 4,
}
