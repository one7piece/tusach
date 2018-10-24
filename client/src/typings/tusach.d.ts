import { Long } from "protobufjs/minimal";
import * as $protobuf from "protobufjs";

/** Namespace model. */
export namespace model {

    /** Properties of a User. */
    interface IUser {

        /** User name */
        name?: (string|null);

        /** User roles */
        roles?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IUser);

        /** User name. */
        public name: string;

        /** User roles. */
        public roles: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: model.IUser): model.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link model.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link model.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): model.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SystemInfo. */
    interface ISystemInfo {

        /** SystemInfo systemUpTime */
        systemUpTime?: (google.protobuf.ITimestamp|null);

        /** SystemInfo bookLastUpdatedTime */
        bookLastUpdatedTime?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a SystemInfo. */
    class SystemInfo implements ISystemInfo {

        /**
         * Constructs a new SystemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ISystemInfo);

        /** SystemInfo systemUpTime. */
        public systemUpTime?: (google.protobuf.ITimestamp|null);

        /** SystemInfo bookLastUpdatedTime. */
        public bookLastUpdatedTime?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new SystemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SystemInfo instance
         */
        public static create(properties?: model.ISystemInfo): model.SystemInfo;

        /**
         * Encodes the specified SystemInfo message. Does not implicitly {@link model.SystemInfo.verify|verify} messages.
         * @param message SystemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link model.SystemInfo.verify|verify} messages.
         * @param message SystemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SystemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.SystemInfo;

        /**
         * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.SystemInfo;

        /**
         * Verifies a SystemInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SystemInfo
         */
        public static fromObject(object: { [k: string]: any }): model.SystemInfo;

        /**
         * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
         * @param message SystemInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.SystemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SystemInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BookStatusType enum. */
    enum BookStatusType {
        NONE = 0,
        IN_PROGRESS = 1,
        COMPLETED = 2,
        ERROR = 3,
        ABORTED = 4
    }

    /** Properties of a Book. */
    interface IBook {

        /** Book ID */
        ID?: (number|null);

        /** Book status */
        status?: (model.BookStatusType|null);

        /** Book title */
        title?: (string|null);

        /** Book author */
        author?: (string|null);

        /** Book createdTime */
        createdTime?: (google.protobuf.ITimestamp|null);

        /** Book createdBy */
        createdBy?: (string|null);

        /** Book buildTimeSec */
        buildTimeSec?: (number|null);

        /** Book startPageUrl */
        startPageUrl?: (string|null);

        /** Book currentPageUrl */
        currentPageUrl?: (string|null);

        /** Book currentPageNo */
        currentPageNo?: (number|null);

        /** Book maxNumPages */
        maxNumPages?: (number|null);

        /** Book lastUpdatedTime */
        lastUpdatedTime?: (google.protobuf.ITimestamp|null);

        /** Book errorMsg */
        errorMsg?: (string|null);

        /** Book epubCreated */
        epubCreated?: (boolean|null);

        /** Book deleted */
        deleted?: (boolean|null);
    }

    /** Represents a Book. */
    class Book implements IBook {

        /**
         * Constructs a new Book.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IBook);

        /** Book ID. */
        public ID: number;

        /** Book status. */
        public status: model.BookStatusType;

        /** Book title. */
        public title: string;

        /** Book author. */
        public author: string;

        /** Book createdTime. */
        public createdTime?: (google.protobuf.ITimestamp|null);

        /** Book createdBy. */
        public createdBy: string;

        /** Book buildTimeSec. */
        public buildTimeSec: number;

        /** Book startPageUrl. */
        public startPageUrl: string;

        /** Book currentPageUrl. */
        public currentPageUrl: string;

        /** Book currentPageNo. */
        public currentPageNo: number;

        /** Book maxNumPages. */
        public maxNumPages: number;

        /** Book lastUpdatedTime. */
        public lastUpdatedTime?: (google.protobuf.ITimestamp|null);

        /** Book errorMsg. */
        public errorMsg: string;

        /** Book epubCreated. */
        public epubCreated: boolean;

        /** Book deleted. */
        public deleted: boolean;

        /**
         * Creates a new Book instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Book instance
         */
        public static create(properties?: model.IBook): model.Book;

        /**
         * Encodes the specified Book message. Does not implicitly {@link model.Book.verify|verify} messages.
         * @param message Book message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Book message, length delimited. Does not implicitly {@link model.Book.verify|verify} messages.
         * @param message Book message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Book message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Book;

        /**
         * Decodes a Book message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Book;

        /**
         * Verifies a Book message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Book message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Book
         */
        public static fromObject(object: { [k: string]: any }): model.Book;

        /**
         * Creates a plain object from a Book message. Also converts values to other types if specified.
         * @param message Book
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Book, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Book to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BookList. */
    interface IBookList {

        /** BookList books */
        books?: (model.IBook[]|null);

        /** BookList isFullList */
        isFullList?: (boolean|null);
    }

    /** Represents a BookList. */
    class BookList implements IBookList {

        /**
         * Constructs a new BookList.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IBookList);

        /** BookList books. */
        public books: model.IBook[];

        /** BookList isFullList. */
        public isFullList: boolean;

        /**
         * Creates a new BookList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BookList instance
         */
        public static create(properties?: model.IBookList): model.BookList;

        /**
         * Encodes the specified BookList message. Does not implicitly {@link model.BookList.verify|verify} messages.
         * @param message BookList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IBookList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BookList message, length delimited. Does not implicitly {@link model.BookList.verify|verify} messages.
         * @param message BookList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IBookList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BookList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.BookList;

        /**
         * Decodes a BookList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BookList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.BookList;

        /**
         * Verifies a BookList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BookList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BookList
         */
        public static fromObject(object: { [k: string]: any }): model.BookList;

        /**
         * Creates a plain object from a BookList message. Also converts values to other types if specified.
         * @param message BookList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.BookList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BookList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewBookRequest. */
    interface INewBookRequest {

        /** NewBookRequest title */
        title?: (string|null);

        /** NewBookRequest startPageUrl */
        startPageUrl?: (string|null);

        /** NewBookRequest author */
        author?: (string|null);

        /** NewBookRequest maxNumPages */
        maxNumPages?: (number|null);
    }

    /** Represents a NewBookRequest. */
    class NewBookRequest implements INewBookRequest {

        /**
         * Constructs a new NewBookRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.INewBookRequest);

        /** NewBookRequest title. */
        public title: string;

        /** NewBookRequest startPageUrl. */
        public startPageUrl: string;

        /** NewBookRequest author. */
        public author: string;

        /** NewBookRequest maxNumPages. */
        public maxNumPages: number;

        /**
         * Creates a new NewBookRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewBookRequest instance
         */
        public static create(properties?: model.INewBookRequest): model.NewBookRequest;

        /**
         * Encodes the specified NewBookRequest message. Does not implicitly {@link model.NewBookRequest.verify|verify} messages.
         * @param message NewBookRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.INewBookRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewBookRequest message, length delimited. Does not implicitly {@link model.NewBookRequest.verify|verify} messages.
         * @param message NewBookRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.INewBookRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewBookRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewBookRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.NewBookRequest;

        /**
         * Decodes a NewBookRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewBookRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.NewBookRequest;

        /**
         * Verifies a NewBookRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewBookRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewBookRequest
         */
        public static fromObject(object: { [k: string]: any }): model.NewBookRequest;

        /**
         * Creates a plain object from a NewBookRequest message. Also converts values to other types if specified.
         * @param message NewBookRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.NewBookRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewBookRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BookID. */
    interface IBookID {

        /** BookID id */
        id?: (number|null);
    }

    /** Represents a BookID. */
    class BookID implements IBookID {

        /**
         * Constructs a new BookID.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IBookID);

        /** BookID id. */
        public id: number;

        /**
         * Creates a new BookID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BookID instance
         */
        public static create(properties?: model.IBookID): model.BookID;

        /**
         * Encodes the specified BookID message. Does not implicitly {@link model.BookID.verify|verify} messages.
         * @param message BookID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IBookID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BookID message, length delimited. Does not implicitly {@link model.BookID.verify|verify} messages.
         * @param message BookID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IBookID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BookID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.BookID;

        /**
         * Decodes a BookID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BookID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.BookID;

        /**
         * Verifies a BookID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BookID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BookID
         */
        public static fromObject(object: { [k: string]: any }): model.BookID;

        /**
         * Creates a plain object from a BookID message. Also converts values to other types if specified.
         * @param message BookID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.BookID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BookID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chapter. */
    interface IChapter {

        /** Chapter chapterNo */
        chapterNo?: (number|null);

        /** Chapter bookId */
        bookId?: (number|null);

        /** Chapter title */
        title?: (string|null);

        /** Chapter html */
        html?: (Uint8Array|null);
    }

    /** Represents a Chapter. */
    class Chapter implements IChapter {

        /**
         * Constructs a new Chapter.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IChapter);

        /** Chapter chapterNo. */
        public chapterNo: number;

        /** Chapter bookId. */
        public bookId: number;

        /** Chapter title. */
        public title: string;

        /** Chapter html. */
        public html: Uint8Array;

        /**
         * Creates a new Chapter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chapter instance
         */
        public static create(properties?: model.IChapter): model.Chapter;

        /**
         * Encodes the specified Chapter message. Does not implicitly {@link model.Chapter.verify|verify} messages.
         * @param message Chapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chapter message, length delimited. Does not implicitly {@link model.Chapter.verify|verify} messages.
         * @param message Chapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chapter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Chapter;

        /**
         * Decodes a Chapter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Chapter;

        /**
         * Verifies a Chapter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chapter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chapter
         */
        public static fromObject(object: { [k: string]: any }): model.Chapter;

        /**
         * Creates a plain object from a Chapter message. Also converts values to other types if specified.
         * @param message Chapter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Chapter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chapter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
