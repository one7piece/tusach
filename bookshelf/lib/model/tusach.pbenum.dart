///
//  Generated code. Do not modify.
//  source: tusach.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

// ignore_for_file: UNDEFINED_SHOWN_NAME,UNUSED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class BookStatusType extends $pb.ProtobufEnum {
  static const BookStatusType NONE = BookStatusType._(0, 'NONE');
  static const BookStatusType IN_PROGRESS = BookStatusType._(1, 'IN_PROGRESS');
  static const BookStatusType COMPLETED = BookStatusType._(2, 'COMPLETED');
  static const BookStatusType ERROR = BookStatusType._(3, 'ERROR');
  static const BookStatusType ABORTED = BookStatusType._(4, 'ABORTED');

  static const $core.List<BookStatusType> values = <BookStatusType> [
    NONE,
    IN_PROGRESS,
    COMPLETED,
    ERROR,
    ABORTED,
  ];

  static final $core.Map<$core.int, BookStatusType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static BookStatusType valueOf($core.int value) => _byValue[value];

  const BookStatusType._($core.int v, $core.String n) : super(v, n);
}

