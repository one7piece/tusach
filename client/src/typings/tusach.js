/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const model = $root.model = (() => {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    const model = {};

    model.User = (function() {

        /**
         * Properties of a User.
         * @memberof model
         * @interface IUser
         * @property {string|null} [name] User name
         * @property {string|null} [roles] User roles
         */

        /**
         * Constructs a new User.
         * @memberof model
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {model.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User name.
         * @member {string} name
         * @memberof model.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * User roles.
         * @member {string} roles
         * @memberof model.User
         * @instance
         */
        User.prototype.roles = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof model.User
         * @static
         * @param {model.IUser=} [properties] Properties to set
         * @returns {model.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link model.User.verify|verify} messages.
         * @function encode
         * @memberof model.User
         * @static
         * @param {model.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.roles != null && message.hasOwnProperty("roles"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roles);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link model.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.User
         * @static
         * @param {model.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof model.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.roles = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof model.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.roles != null && message.hasOwnProperty("roles"))
                if (!$util.isString(message.roles))
                    return "roles: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.model.User)
                return object;
            let message = new $root.model.User();
            if (object.name != null)
                message.name = String(object.name);
            if (object.roles != null)
                message.roles = String(object.roles);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.User
         * @static
         * @param {model.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.roles = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.roles != null && message.hasOwnProperty("roles"))
                object.roles = message.roles;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof model.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    model.SystemInfo = (function() {

        /**
         * Properties of a SystemInfo.
         * @memberof model
         * @interface ISystemInfo
         * @property {google.protobuf.ITimestamp|null} [systemUpTime] SystemInfo systemUpTime
         * @property {google.protobuf.ITimestamp|null} [bookLastUpdatedTime] SystemInfo bookLastUpdatedTime
         */

        /**
         * Constructs a new SystemInfo.
         * @memberof model
         * @classdesc Represents a SystemInfo.
         * @implements ISystemInfo
         * @constructor
         * @param {model.ISystemInfo=} [properties] Properties to set
         */
        function SystemInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemInfo systemUpTime.
         * @member {google.protobuf.ITimestamp|null|undefined} systemUpTime
         * @memberof model.SystemInfo
         * @instance
         */
        SystemInfo.prototype.systemUpTime = null;

        /**
         * SystemInfo bookLastUpdatedTime.
         * @member {google.protobuf.ITimestamp|null|undefined} bookLastUpdatedTime
         * @memberof model.SystemInfo
         * @instance
         */
        SystemInfo.prototype.bookLastUpdatedTime = null;

        /**
         * Creates a new SystemInfo instance using the specified properties.
         * @function create
         * @memberof model.SystemInfo
         * @static
         * @param {model.ISystemInfo=} [properties] Properties to set
         * @returns {model.SystemInfo} SystemInfo instance
         */
        SystemInfo.create = function create(properties) {
            return new SystemInfo(properties);
        };

        /**
         * Encodes the specified SystemInfo message. Does not implicitly {@link model.SystemInfo.verify|verify} messages.
         * @function encode
         * @memberof model.SystemInfo
         * @static
         * @param {model.ISystemInfo} message SystemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.systemUpTime != null && message.hasOwnProperty("systemUpTime"))
                $root.google.protobuf.Timestamp.encode(message.systemUpTime, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bookLastUpdatedTime != null && message.hasOwnProperty("bookLastUpdatedTime"))
                $root.google.protobuf.Timestamp.encode(message.bookLastUpdatedTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link model.SystemInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.SystemInfo
         * @static
         * @param {model.ISystemInfo} message SystemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof model.SystemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.SystemInfo} SystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.SystemInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.systemUpTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bookLastUpdatedTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.SystemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.SystemInfo} SystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemInfo message.
         * @function verify
         * @memberof model.SystemInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.systemUpTime != null && message.hasOwnProperty("systemUpTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.systemUpTime);
                if (error)
                    return "systemUpTime." + error;
            }
            if (message.bookLastUpdatedTime != null && message.hasOwnProperty("bookLastUpdatedTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.bookLastUpdatedTime);
                if (error)
                    return "bookLastUpdatedTime." + error;
            }
            return null;
        };

        /**
         * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.SystemInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.SystemInfo} SystemInfo
         */
        SystemInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.model.SystemInfo)
                return object;
            let message = new $root.model.SystemInfo();
            if (object.systemUpTime != null) {
                if (typeof object.systemUpTime !== "object")
                    throw TypeError(".model.SystemInfo.systemUpTime: object expected");
                message.systemUpTime = $root.google.protobuf.Timestamp.fromObject(object.systemUpTime);
            }
            if (object.bookLastUpdatedTime != null) {
                if (typeof object.bookLastUpdatedTime !== "object")
                    throw TypeError(".model.SystemInfo.bookLastUpdatedTime: object expected");
                message.bookLastUpdatedTime = $root.google.protobuf.Timestamp.fromObject(object.bookLastUpdatedTime);
            }
            return message;
        };

        /**
         * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.SystemInfo
         * @static
         * @param {model.SystemInfo} message SystemInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.systemUpTime = null;
                object.bookLastUpdatedTime = null;
            }
            if (message.systemUpTime != null && message.hasOwnProperty("systemUpTime"))
                object.systemUpTime = $root.google.protobuf.Timestamp.toObject(message.systemUpTime, options);
            if (message.bookLastUpdatedTime != null && message.hasOwnProperty("bookLastUpdatedTime"))
                object.bookLastUpdatedTime = $root.google.protobuf.Timestamp.toObject(message.bookLastUpdatedTime, options);
            return object;
        };

        /**
         * Converts this SystemInfo to JSON.
         * @function toJSON
         * @memberof model.SystemInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SystemInfo;
    })();

    /**
     * BookStatusType enum.
     * @name model.BookStatusType
     * @enum {string}
     * @property {number} NONE=0 NONE value
     * @property {number} IN_PROGRESS=1 IN_PROGRESS value
     * @property {number} COMPLETED=2 COMPLETED value
     * @property {number} ERROR=3 ERROR value
     * @property {number} ABORTED=4 ABORTED value
     */
    model.BookStatusType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "IN_PROGRESS"] = 1;
        values[valuesById[2] = "COMPLETED"] = 2;
        values[valuesById[3] = "ERROR"] = 3;
        values[valuesById[4] = "ABORTED"] = 4;
        return values;
    })();

    model.Book = (function() {

        /**
         * Properties of a Book.
         * @memberof model
         * @interface IBook
         * @property {number|null} [ID] Book ID
         * @property {model.BookStatusType|null} [status] Book status
         * @property {string|null} [title] Book title
         * @property {string|null} [author] Book author
         * @property {google.protobuf.ITimestamp|null} [createdTime] Book createdTime
         * @property {string|null} [createdBy] Book createdBy
         * @property {number|null} [buildTimeSec] Book buildTimeSec
         * @property {string|null} [startPageUrl] Book startPageUrl
         * @property {string|null} [currentPageUrl] Book currentPageUrl
         * @property {number|null} [currentPageNo] Book currentPageNo
         * @property {number|null} [maxNumPages] Book maxNumPages
         * @property {google.protobuf.ITimestamp|null} [lastUpdatedTime] Book lastUpdatedTime
         * @property {string|null} [errorMsg] Book errorMsg
         * @property {boolean|null} [epubCreated] Book epubCreated
         * @property {boolean|null} [deleted] Book deleted
         */

        /**
         * Constructs a new Book.
         * @memberof model
         * @classdesc Represents a Book.
         * @implements IBook
         * @constructor
         * @param {model.IBook=} [properties] Properties to set
         */
        function Book(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Book ID.
         * @member {number} ID
         * @memberof model.Book
         * @instance
         */
        Book.prototype.ID = 0;

        /**
         * Book status.
         * @member {model.BookStatusType} status
         * @memberof model.Book
         * @instance
         */
        Book.prototype.status = 0;

        /**
         * Book title.
         * @member {string} title
         * @memberof model.Book
         * @instance
         */
        Book.prototype.title = "";

        /**
         * Book author.
         * @member {string} author
         * @memberof model.Book
         * @instance
         */
        Book.prototype.author = "";

        /**
         * Book createdTime.
         * @member {google.protobuf.ITimestamp|null|undefined} createdTime
         * @memberof model.Book
         * @instance
         */
        Book.prototype.createdTime = null;

        /**
         * Book createdBy.
         * @member {string} createdBy
         * @memberof model.Book
         * @instance
         */
        Book.prototype.createdBy = "";

        /**
         * Book buildTimeSec.
         * @member {number} buildTimeSec
         * @memberof model.Book
         * @instance
         */
        Book.prototype.buildTimeSec = 0;

        /**
         * Book startPageUrl.
         * @member {string} startPageUrl
         * @memberof model.Book
         * @instance
         */
        Book.prototype.startPageUrl = "";

        /**
         * Book currentPageUrl.
         * @member {string} currentPageUrl
         * @memberof model.Book
         * @instance
         */
        Book.prototype.currentPageUrl = "";

        /**
         * Book currentPageNo.
         * @member {number} currentPageNo
         * @memberof model.Book
         * @instance
         */
        Book.prototype.currentPageNo = 0;

        /**
         * Book maxNumPages.
         * @member {number} maxNumPages
         * @memberof model.Book
         * @instance
         */
        Book.prototype.maxNumPages = 0;

        /**
         * Book lastUpdatedTime.
         * @member {google.protobuf.ITimestamp|null|undefined} lastUpdatedTime
         * @memberof model.Book
         * @instance
         */
        Book.prototype.lastUpdatedTime = null;

        /**
         * Book errorMsg.
         * @member {string} errorMsg
         * @memberof model.Book
         * @instance
         */
        Book.prototype.errorMsg = "";

        /**
         * Book epubCreated.
         * @member {boolean} epubCreated
         * @memberof model.Book
         * @instance
         */
        Book.prototype.epubCreated = false;

        /**
         * Book deleted.
         * @member {boolean} deleted
         * @memberof model.Book
         * @instance
         */
        Book.prototype.deleted = false;

        /**
         * Creates a new Book instance using the specified properties.
         * @function create
         * @memberof model.Book
         * @static
         * @param {model.IBook=} [properties] Properties to set
         * @returns {model.Book} Book instance
         */
        Book.create = function create(properties) {
            return new Book(properties);
        };

        /**
         * Encodes the specified Book message. Does not implicitly {@link model.Book.verify|verify} messages.
         * @function encode
         * @memberof model.Book
         * @static
         * @param {model.IBook} message Book message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Book.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.author != null && message.hasOwnProperty("author"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.author);
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                $root.google.protobuf.Timestamp.encode(message.createdTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.createdBy);
            if (message.buildTimeSec != null && message.hasOwnProperty("buildTimeSec"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.buildTimeSec);
            if (message.startPageUrl != null && message.hasOwnProperty("startPageUrl"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.startPageUrl);
            if (message.currentPageUrl != null && message.hasOwnProperty("currentPageUrl"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.currentPageUrl);
            if (message.currentPageNo != null && message.hasOwnProperty("currentPageNo"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.currentPageNo);
            if (message.maxNumPages != null && message.hasOwnProperty("maxNumPages"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.maxNumPages);
            if (message.lastUpdatedTime != null && message.hasOwnProperty("lastUpdatedTime"))
                $root.google.protobuf.Timestamp.encode(message.lastUpdatedTime, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.errorMsg);
            if (message.epubCreated != null && message.hasOwnProperty("epubCreated"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.epubCreated);
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.deleted);
            return writer;
        };

        /**
         * Encodes the specified Book message, length delimited. Does not implicitly {@link model.Book.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Book
         * @static
         * @param {model.IBook} message Book message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Book.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Book message from the specified reader or buffer.
         * @function decode
         * @memberof model.Book
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Book} Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Book.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Book();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.author = reader.string();
                    break;
                case 5:
                    message.createdTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.buildTimeSec = reader.int32();
                    break;
                case 8:
                    message.startPageUrl = reader.string();
                    break;
                case 9:
                    message.currentPageUrl = reader.string();
                    break;
                case 10:
                    message.currentPageNo = reader.int32();
                    break;
                case 11:
                    message.maxNumPages = reader.int32();
                    break;
                case 12:
                    message.lastUpdatedTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.errorMsg = reader.string();
                    break;
                case 14:
                    message.epubCreated = reader.bool();
                    break;
                case 15:
                    message.deleted = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Book message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Book
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Book} Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Book.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Book message.
         * @function verify
         * @memberof model.Book
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Book.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.author != null && message.hasOwnProperty("author"))
                if (!$util.isString(message.author))
                    return "author: string expected";
            if (message.createdTime != null && message.hasOwnProperty("createdTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdTime);
                if (error)
                    return "createdTime." + error;
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.buildTimeSec != null && message.hasOwnProperty("buildTimeSec"))
                if (!$util.isInteger(message.buildTimeSec))
                    return "buildTimeSec: integer expected";
            if (message.startPageUrl != null && message.hasOwnProperty("startPageUrl"))
                if (!$util.isString(message.startPageUrl))
                    return "startPageUrl: string expected";
            if (message.currentPageUrl != null && message.hasOwnProperty("currentPageUrl"))
                if (!$util.isString(message.currentPageUrl))
                    return "currentPageUrl: string expected";
            if (message.currentPageNo != null && message.hasOwnProperty("currentPageNo"))
                if (!$util.isInteger(message.currentPageNo))
                    return "currentPageNo: integer expected";
            if (message.maxNumPages != null && message.hasOwnProperty("maxNumPages"))
                if (!$util.isInteger(message.maxNumPages))
                    return "maxNumPages: integer expected";
            if (message.lastUpdatedTime != null && message.hasOwnProperty("lastUpdatedTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.lastUpdatedTime);
                if (error)
                    return "lastUpdatedTime." + error;
            }
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            if (message.epubCreated != null && message.hasOwnProperty("epubCreated"))
                if (typeof message.epubCreated !== "boolean")
                    return "epubCreated: boolean expected";
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                if (typeof message.deleted !== "boolean")
                    return "deleted: boolean expected";
            return null;
        };

        /**
         * Creates a Book message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Book
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Book} Book
         */
        Book.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Book)
                return object;
            let message = new $root.model.Book();
            if (object.ID != null)
                message.ID = object.ID | 0;
            switch (object.status) {
            case "NONE":
            case 0:
                message.status = 0;
                break;
            case "IN_PROGRESS":
            case 1:
                message.status = 1;
                break;
            case "COMPLETED":
            case 2:
                message.status = 2;
                break;
            case "ERROR":
            case 3:
                message.status = 3;
                break;
            case "ABORTED":
            case 4:
                message.status = 4;
                break;
            }
            if (object.title != null)
                message.title = String(object.title);
            if (object.author != null)
                message.author = String(object.author);
            if (object.createdTime != null) {
                if (typeof object.createdTime !== "object")
                    throw TypeError(".model.Book.createdTime: object expected");
                message.createdTime = $root.google.protobuf.Timestamp.fromObject(object.createdTime);
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.buildTimeSec != null)
                message.buildTimeSec = object.buildTimeSec | 0;
            if (object.startPageUrl != null)
                message.startPageUrl = String(object.startPageUrl);
            if (object.currentPageUrl != null)
                message.currentPageUrl = String(object.currentPageUrl);
            if (object.currentPageNo != null)
                message.currentPageNo = object.currentPageNo | 0;
            if (object.maxNumPages != null)
                message.maxNumPages = object.maxNumPages | 0;
            if (object.lastUpdatedTime != null) {
                if (typeof object.lastUpdatedTime !== "object")
                    throw TypeError(".model.Book.lastUpdatedTime: object expected");
                message.lastUpdatedTime = $root.google.protobuf.Timestamp.fromObject(object.lastUpdatedTime);
            }
            if (object.errorMsg != null)
                message.errorMsg = String(object.errorMsg);
            if (object.epubCreated != null)
                message.epubCreated = Boolean(object.epubCreated);
            if (object.deleted != null)
                message.deleted = Boolean(object.deleted);
            return message;
        };

        /**
         * Creates a plain object from a Book message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Book
         * @static
         * @param {model.Book} message Book
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Book.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ID = 0;
                object.status = options.enums === String ? "NONE" : 0;
                object.title = "";
                object.author = "";
                object.createdTime = null;
                object.createdBy = "";
                object.buildTimeSec = 0;
                object.startPageUrl = "";
                object.currentPageUrl = "";
                object.currentPageNo = 0;
                object.maxNumPages = 0;
                object.lastUpdatedTime = null;
                object.errorMsg = "";
                object.epubCreated = false;
                object.deleted = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.model.BookStatusType[message.status] : message.status;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = message.author;
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                object.createdTime = $root.google.protobuf.Timestamp.toObject(message.createdTime, options);
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.buildTimeSec != null && message.hasOwnProperty("buildTimeSec"))
                object.buildTimeSec = message.buildTimeSec;
            if (message.startPageUrl != null && message.hasOwnProperty("startPageUrl"))
                object.startPageUrl = message.startPageUrl;
            if (message.currentPageUrl != null && message.hasOwnProperty("currentPageUrl"))
                object.currentPageUrl = message.currentPageUrl;
            if (message.currentPageNo != null && message.hasOwnProperty("currentPageNo"))
                object.currentPageNo = message.currentPageNo;
            if (message.maxNumPages != null && message.hasOwnProperty("maxNumPages"))
                object.maxNumPages = message.maxNumPages;
            if (message.lastUpdatedTime != null && message.hasOwnProperty("lastUpdatedTime"))
                object.lastUpdatedTime = $root.google.protobuf.Timestamp.toObject(message.lastUpdatedTime, options);
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                object.errorMsg = message.errorMsg;
            if (message.epubCreated != null && message.hasOwnProperty("epubCreated"))
                object.epubCreated = message.epubCreated;
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                object.deleted = message.deleted;
            return object;
        };

        /**
         * Converts this Book to JSON.
         * @function toJSON
         * @memberof model.Book
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Book.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Book;
    })();

    model.BookList = (function() {

        /**
         * Properties of a BookList.
         * @memberof model
         * @interface IBookList
         * @property {Array.<model.IBook>|null} [books] BookList books
         * @property {boolean|null} [isFullList] BookList isFullList
         */

        /**
         * Constructs a new BookList.
         * @memberof model
         * @classdesc Represents a BookList.
         * @implements IBookList
         * @constructor
         * @param {model.IBookList=} [properties] Properties to set
         */
        function BookList(properties) {
            this.books = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BookList books.
         * @member {Array.<model.IBook>} books
         * @memberof model.BookList
         * @instance
         */
        BookList.prototype.books = $util.emptyArray;

        /**
         * BookList isFullList.
         * @member {boolean} isFullList
         * @memberof model.BookList
         * @instance
         */
        BookList.prototype.isFullList = false;

        /**
         * Creates a new BookList instance using the specified properties.
         * @function create
         * @memberof model.BookList
         * @static
         * @param {model.IBookList=} [properties] Properties to set
         * @returns {model.BookList} BookList instance
         */
        BookList.create = function create(properties) {
            return new BookList(properties);
        };

        /**
         * Encodes the specified BookList message. Does not implicitly {@link model.BookList.verify|verify} messages.
         * @function encode
         * @memberof model.BookList
         * @static
         * @param {model.IBookList} message BookList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BookList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.books != null && message.books.length)
                for (let i = 0; i < message.books.length; ++i)
                    $root.model.Book.encode(message.books[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isFullList != null && message.hasOwnProperty("isFullList"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isFullList);
            return writer;
        };

        /**
         * Encodes the specified BookList message, length delimited. Does not implicitly {@link model.BookList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.BookList
         * @static
         * @param {model.IBookList} message BookList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BookList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BookList message from the specified reader or buffer.
         * @function decode
         * @memberof model.BookList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.BookList} BookList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BookList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.BookList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.books && message.books.length))
                        message.books = [];
                    message.books.push($root.model.Book.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.isFullList = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BookList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.BookList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.BookList} BookList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BookList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BookList message.
         * @function verify
         * @memberof model.BookList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BookList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.books != null && message.hasOwnProperty("books")) {
                if (!Array.isArray(message.books))
                    return "books: array expected";
                for (let i = 0; i < message.books.length; ++i) {
                    let error = $root.model.Book.verify(message.books[i]);
                    if (error)
                        return "books." + error;
                }
            }
            if (message.isFullList != null && message.hasOwnProperty("isFullList"))
                if (typeof message.isFullList !== "boolean")
                    return "isFullList: boolean expected";
            return null;
        };

        /**
         * Creates a BookList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.BookList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.BookList} BookList
         */
        BookList.fromObject = function fromObject(object) {
            if (object instanceof $root.model.BookList)
                return object;
            let message = new $root.model.BookList();
            if (object.books) {
                if (!Array.isArray(object.books))
                    throw TypeError(".model.BookList.books: array expected");
                message.books = [];
                for (let i = 0; i < object.books.length; ++i) {
                    if (typeof object.books[i] !== "object")
                        throw TypeError(".model.BookList.books: object expected");
                    message.books[i] = $root.model.Book.fromObject(object.books[i]);
                }
            }
            if (object.isFullList != null)
                message.isFullList = Boolean(object.isFullList);
            return message;
        };

        /**
         * Creates a plain object from a BookList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.BookList
         * @static
         * @param {model.BookList} message BookList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BookList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.books = [];
            if (options.defaults)
                object.isFullList = false;
            if (message.books && message.books.length) {
                object.books = [];
                for (let j = 0; j < message.books.length; ++j)
                    object.books[j] = $root.model.Book.toObject(message.books[j], options);
            }
            if (message.isFullList != null && message.hasOwnProperty("isFullList"))
                object.isFullList = message.isFullList;
            return object;
        };

        /**
         * Converts this BookList to JSON.
         * @function toJSON
         * @memberof model.BookList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BookList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BookList;
    })();

    model.NewBookRequest = (function() {

        /**
         * Properties of a NewBookRequest.
         * @memberof model
         * @interface INewBookRequest
         * @property {string|null} [title] NewBookRequest title
         * @property {string|null} [startPageUrl] NewBookRequest startPageUrl
         * @property {string|null} [author] NewBookRequest author
         * @property {number|null} [maxNumPages] NewBookRequest maxNumPages
         */

        /**
         * Constructs a new NewBookRequest.
         * @memberof model
         * @classdesc Represents a NewBookRequest.
         * @implements INewBookRequest
         * @constructor
         * @param {model.INewBookRequest=} [properties] Properties to set
         */
        function NewBookRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewBookRequest title.
         * @member {string} title
         * @memberof model.NewBookRequest
         * @instance
         */
        NewBookRequest.prototype.title = "";

        /**
         * NewBookRequest startPageUrl.
         * @member {string} startPageUrl
         * @memberof model.NewBookRequest
         * @instance
         */
        NewBookRequest.prototype.startPageUrl = "";

        /**
         * NewBookRequest author.
         * @member {string} author
         * @memberof model.NewBookRequest
         * @instance
         */
        NewBookRequest.prototype.author = "";

        /**
         * NewBookRequest maxNumPages.
         * @member {number} maxNumPages
         * @memberof model.NewBookRequest
         * @instance
         */
        NewBookRequest.prototype.maxNumPages = 0;

        /**
         * Creates a new NewBookRequest instance using the specified properties.
         * @function create
         * @memberof model.NewBookRequest
         * @static
         * @param {model.INewBookRequest=} [properties] Properties to set
         * @returns {model.NewBookRequest} NewBookRequest instance
         */
        NewBookRequest.create = function create(properties) {
            return new NewBookRequest(properties);
        };

        /**
         * Encodes the specified NewBookRequest message. Does not implicitly {@link model.NewBookRequest.verify|verify} messages.
         * @function encode
         * @memberof model.NewBookRequest
         * @static
         * @param {model.INewBookRequest} message NewBookRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewBookRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.startPageUrl != null && message.hasOwnProperty("startPageUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.startPageUrl);
            if (message.author != null && message.hasOwnProperty("author"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.author);
            if (message.maxNumPages != null && message.hasOwnProperty("maxNumPages"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxNumPages);
            return writer;
        };

        /**
         * Encodes the specified NewBookRequest message, length delimited. Does not implicitly {@link model.NewBookRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.NewBookRequest
         * @static
         * @param {model.INewBookRequest} message NewBookRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewBookRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewBookRequest message from the specified reader or buffer.
         * @function decode
         * @memberof model.NewBookRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.NewBookRequest} NewBookRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewBookRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.NewBookRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.startPageUrl = reader.string();
                    break;
                case 3:
                    message.author = reader.string();
                    break;
                case 4:
                    message.maxNumPages = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewBookRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.NewBookRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.NewBookRequest} NewBookRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewBookRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewBookRequest message.
         * @function verify
         * @memberof model.NewBookRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewBookRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.startPageUrl != null && message.hasOwnProperty("startPageUrl"))
                if (!$util.isString(message.startPageUrl))
                    return "startPageUrl: string expected";
            if (message.author != null && message.hasOwnProperty("author"))
                if (!$util.isString(message.author))
                    return "author: string expected";
            if (message.maxNumPages != null && message.hasOwnProperty("maxNumPages"))
                if (!$util.isInteger(message.maxNumPages))
                    return "maxNumPages: integer expected";
            return null;
        };

        /**
         * Creates a NewBookRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.NewBookRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.NewBookRequest} NewBookRequest
         */
        NewBookRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.model.NewBookRequest)
                return object;
            let message = new $root.model.NewBookRequest();
            if (object.title != null)
                message.title = String(object.title);
            if (object.startPageUrl != null)
                message.startPageUrl = String(object.startPageUrl);
            if (object.author != null)
                message.author = String(object.author);
            if (object.maxNumPages != null)
                message.maxNumPages = object.maxNumPages | 0;
            return message;
        };

        /**
         * Creates a plain object from a NewBookRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.NewBookRequest
         * @static
         * @param {model.NewBookRequest} message NewBookRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewBookRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.startPageUrl = "";
                object.author = "";
                object.maxNumPages = 0;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.startPageUrl != null && message.hasOwnProperty("startPageUrl"))
                object.startPageUrl = message.startPageUrl;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = message.author;
            if (message.maxNumPages != null && message.hasOwnProperty("maxNumPages"))
                object.maxNumPages = message.maxNumPages;
            return object;
        };

        /**
         * Converts this NewBookRequest to JSON.
         * @function toJSON
         * @memberof model.NewBookRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewBookRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewBookRequest;
    })();

    model.BookID = (function() {

        /**
         * Properties of a BookID.
         * @memberof model
         * @interface IBookID
         * @property {number|null} [id] BookID id
         */

        /**
         * Constructs a new BookID.
         * @memberof model
         * @classdesc Represents a BookID.
         * @implements IBookID
         * @constructor
         * @param {model.IBookID=} [properties] Properties to set
         */
        function BookID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BookID id.
         * @member {number} id
         * @memberof model.BookID
         * @instance
         */
        BookID.prototype.id = 0;

        /**
         * Creates a new BookID instance using the specified properties.
         * @function create
         * @memberof model.BookID
         * @static
         * @param {model.IBookID=} [properties] Properties to set
         * @returns {model.BookID} BookID instance
         */
        BookID.create = function create(properties) {
            return new BookID(properties);
        };

        /**
         * Encodes the specified BookID message. Does not implicitly {@link model.BookID.verify|verify} messages.
         * @function encode
         * @memberof model.BookID
         * @static
         * @param {model.IBookID} message BookID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BookID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified BookID message, length delimited. Does not implicitly {@link model.BookID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.BookID
         * @static
         * @param {model.IBookID} message BookID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BookID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BookID message from the specified reader or buffer.
         * @function decode
         * @memberof model.BookID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.BookID} BookID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BookID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.BookID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BookID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.BookID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.BookID} BookID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BookID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BookID message.
         * @function verify
         * @memberof model.BookID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BookID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a BookID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.BookID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.BookID} BookID
         */
        BookID.fromObject = function fromObject(object) {
            if (object instanceof $root.model.BookID)
                return object;
            let message = new $root.model.BookID();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a BookID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.BookID
         * @static
         * @param {model.BookID} message BookID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BookID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this BookID to JSON.
         * @function toJSON
         * @memberof model.BookID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BookID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BookID;
    })();

    model.Chapter = (function() {

        /**
         * Properties of a Chapter.
         * @memberof model
         * @interface IChapter
         * @property {number|null} [chapterNo] Chapter chapterNo
         * @property {number|null} [bookId] Chapter bookId
         * @property {string|null} [title] Chapter title
         * @property {Uint8Array|null} [html] Chapter html
         */

        /**
         * Constructs a new Chapter.
         * @memberof model
         * @classdesc Represents a Chapter.
         * @implements IChapter
         * @constructor
         * @param {model.IChapter=} [properties] Properties to set
         */
        function Chapter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chapter chapterNo.
         * @member {number} chapterNo
         * @memberof model.Chapter
         * @instance
         */
        Chapter.prototype.chapterNo = 0;

        /**
         * Chapter bookId.
         * @member {number} bookId
         * @memberof model.Chapter
         * @instance
         */
        Chapter.prototype.bookId = 0;

        /**
         * Chapter title.
         * @member {string} title
         * @memberof model.Chapter
         * @instance
         */
        Chapter.prototype.title = "";

        /**
         * Chapter html.
         * @member {Uint8Array} html
         * @memberof model.Chapter
         * @instance
         */
        Chapter.prototype.html = $util.newBuffer([]);

        /**
         * Creates a new Chapter instance using the specified properties.
         * @function create
         * @memberof model.Chapter
         * @static
         * @param {model.IChapter=} [properties] Properties to set
         * @returns {model.Chapter} Chapter instance
         */
        Chapter.create = function create(properties) {
            return new Chapter(properties);
        };

        /**
         * Encodes the specified Chapter message. Does not implicitly {@link model.Chapter.verify|verify} messages.
         * @function encode
         * @memberof model.Chapter
         * @static
         * @param {model.IChapter} message Chapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chapter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chapterNo != null && message.hasOwnProperty("chapterNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chapterNo);
            if (message.bookId != null && message.hasOwnProperty("bookId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bookId);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.html != null && message.hasOwnProperty("html"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.html);
            return writer;
        };

        /**
         * Encodes the specified Chapter message, length delimited. Does not implicitly {@link model.Chapter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Chapter
         * @static
         * @param {model.IChapter} message Chapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chapter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chapter message from the specified reader or buffer.
         * @function decode
         * @memberof model.Chapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Chapter} Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chapter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Chapter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chapterNo = reader.int32();
                    break;
                case 2:
                    message.bookId = reader.int32();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.html = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chapter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Chapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Chapter} Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chapter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chapter message.
         * @function verify
         * @memberof model.Chapter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chapter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chapterNo != null && message.hasOwnProperty("chapterNo"))
                if (!$util.isInteger(message.chapterNo))
                    return "chapterNo: integer expected";
            if (message.bookId != null && message.hasOwnProperty("bookId"))
                if (!$util.isInteger(message.bookId))
                    return "bookId: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.html != null && message.hasOwnProperty("html"))
                if (!(message.html && typeof message.html.length === "number" || $util.isString(message.html)))
                    return "html: buffer expected";
            return null;
        };

        /**
         * Creates a Chapter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Chapter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Chapter} Chapter
         */
        Chapter.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Chapter)
                return object;
            let message = new $root.model.Chapter();
            if (object.chapterNo != null)
                message.chapterNo = object.chapterNo | 0;
            if (object.bookId != null)
                message.bookId = object.bookId | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.html != null)
                if (typeof object.html === "string")
                    $util.base64.decode(object.html, message.html = $util.newBuffer($util.base64.length(object.html)), 0);
                else if (object.html.length)
                    message.html = object.html;
            return message;
        };

        /**
         * Creates a plain object from a Chapter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Chapter
         * @static
         * @param {model.Chapter} message Chapter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chapter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.chapterNo = 0;
                object.bookId = 0;
                object.title = "";
                if (options.bytes === String)
                    object.html = "";
                else {
                    object.html = [];
                    if (options.bytes !== Array)
                        object.html = $util.newBuffer(object.html);
                }
            }
            if (message.chapterNo != null && message.hasOwnProperty("chapterNo"))
                object.chapterNo = message.chapterNo;
            if (message.bookId != null && message.hasOwnProperty("bookId"))
                object.bookId = message.bookId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.html != null && message.hasOwnProperty("html"))
                object.html = options.bytes === String ? $util.base64.encode(message.html, 0, message.html.length) : options.bytes === Array ? Array.prototype.slice.call(message.html) : message.html;
            return object;
        };

        /**
         * Converts this Chapter to JSON.
         * @function toJSON
         * @memberof model.Chapter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chapter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chapter;
    })();

    return model;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
