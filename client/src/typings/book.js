/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.model.Book');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');

goog.forwardDeclare('proto.model.BookStatusType');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.Book = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Book, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Book.displayName = 'proto.model.Book';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.Book.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Book.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Book} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Book.toObject = function(includeInstance, msg) {
  var obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    author: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdtime: (f = msg.getCreatedtime()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    buildtimesec: jspb.Message.getFieldWithDefault(msg, 7, 0),
    startpageurl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    currentpageurl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    currentpageno: jspb.Message.getFieldWithDefault(msg, 10, 0),
    maxnumpages: jspb.Message.getFieldWithDefault(msg, 11, 0),
    lastupdatedtime: (f = msg.getLastupdatedtime()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    errormsg: jspb.Message.getFieldWithDefault(msg, 13, ""),
    epubcreated: jspb.Message.getFieldWithDefault(msg, 14, false),
    deleted: jspb.Message.getFieldWithDefault(msg, 15, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.Book}
 */
proto.model.Book.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Book;
  return proto.model.Book.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Book} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Book}
 */
proto.model.Book.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.model.BookStatusType} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 5:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedtime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuildtimesec(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartpageurl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentpageurl(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentpageno(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxnumpages(value);
      break;
    case 12:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setLastupdatedtime(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormsg(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEpubcreated(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.Book.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Book.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Book} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Book.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedtime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuildtimesec();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getStartpageurl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCurrentpageurl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCurrentpageno();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getMaxnumpages();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLastupdatedtime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getErrormsg();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEpubcreated();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.model.Book.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.model.Book.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional BookStatusType status = 2;
 * @return {!proto.model.BookStatusType}
 */
proto.model.Book.prototype.getStatus = function() {
  return /** @type {!proto.model.BookStatusType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.model.BookStatusType} value */
proto.model.Book.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.model.Book.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.model.Book.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string author = 4;
 * @return {string}
 */
proto.model.Book.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.model.Book.prototype.setAuthor = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp createdTime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.Book.prototype.getCreatedtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.model.Book.prototype.setCreatedtime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.model.Book.prototype.clearCreatedtime = function() {
  this.setCreatedtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Book.prototype.hasCreatedtime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string createdBy = 6;
 * @return {string}
 */
proto.model.Book.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.model.Book.prototype.setCreatedby = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 buildTimeSec = 7;
 * @return {number}
 */
proto.model.Book.prototype.getBuildtimesec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.model.Book.prototype.setBuildtimesec = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string startPageUrl = 8;
 * @return {string}
 */
proto.model.Book.prototype.getStartpageurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.model.Book.prototype.setStartpageurl = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string currentPageUrl = 9;
 * @return {string}
 */
proto.model.Book.prototype.getCurrentpageurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.model.Book.prototype.setCurrentpageurl = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 currentPageNo = 10;
 * @return {number}
 */
proto.model.Book.prototype.getCurrentpageno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.model.Book.prototype.setCurrentpageno = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 maxNumPages = 11;
 * @return {number}
 */
proto.model.Book.prototype.getMaxnumpages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.model.Book.prototype.setMaxnumpages = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp lastUpdatedTime = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.Book.prototype.getLastupdatedtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.model.Book.prototype.setLastupdatedtime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.model.Book.prototype.clearLastupdatedtime = function() {
  this.setLastupdatedtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Book.prototype.hasLastupdatedtime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string errorMsg = 13;
 * @return {string}
 */
proto.model.Book.prototype.getErrormsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.model.Book.prototype.setErrormsg = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool epubCreated = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.model.Book.prototype.getEpubcreated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.model.Book.prototype.setEpubcreated = function(value) {
  jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool deleted = 15;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.model.Book.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 15, false));
};


/** @param {boolean} value */
proto.model.Book.prototype.setDeleted = function(value) {
  jspb.Message.setProto3BooleanField(this, 15, value);
};

