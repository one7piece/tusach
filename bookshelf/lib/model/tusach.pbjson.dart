///
//  Generated code. Do not modify.
//  source: tusach.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const BookStatusType$json = const {
  '1': 'BookStatusType',
  '2': const [
    const {'1': 'NONE', '2': 0},
    const {'1': 'IN_PROGRESS', '2': 1},
    const {'1': 'COMPLETED', '2': 2},
    const {'1': 'ERROR', '2': 3},
    const {'1': 'ABORTED', '2': 4},
  ],
};

const LoginRequest$json = const {
  '1': 'LoginRequest',
  '2': const [
    const {'1': 'provider', '3': 1, '4': 1, '5': 9, '10': 'provider'},
  ],
};

const LoginReply$json = const {
  '1': 'LoginReply',
  '2': const [
    const {'1': 'jwt', '3': 1, '4': 1, '5': 9, '10': 'jwt'},
  ],
};

const User$json = const {
  '1': 'User',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'roles', '3': 2, '4': 1, '5': 9, '10': 'roles'},
  ],
};

const SystemInfo$json = const {
  '1': 'SystemInfo',
  '2': const [
    const {'1': 'system_up_time', '3': 1, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'systemUpTime'},
    const {'1': 'book_last_updated_time', '3': 2, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'bookLastUpdatedTime'},
  ],
};

const BookID$json = const {
  '1': 'BookID',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
  ],
};

const Book$json = const {
  '1': 'Book',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'status', '3': 2, '4': 1, '5': 14, '6': '.model.BookStatusType', '10': 'status'},
    const {'1': 'title', '3': 3, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'author', '3': 4, '4': 1, '5': 9, '10': 'author'},
    const {'1': 'created_time', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdTime'},
    const {'1': 'created_by', '3': 6, '4': 1, '5': 9, '10': 'createdBy'},
    const {'1': 'build_time_sec', '3': 7, '4': 1, '5': 5, '10': 'buildTimeSec'},
    const {'1': 'start_page_url', '3': 8, '4': 1, '5': 9, '10': 'startPageUrl'},
    const {'1': 'current_page_url', '3': 9, '4': 1, '5': 9, '10': 'currentPageUrl'},
    const {'1': 'current_page_no', '3': 10, '4': 1, '5': 5, '10': 'currentPageNo'},
    const {'1': 'max_num_pages', '3': 11, '4': 1, '5': 5, '10': 'maxNumPages'},
    const {'1': 'last_updated_time', '3': 12, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'lastUpdatedTime'},
    const {'1': 'error_msg', '3': 13, '4': 1, '5': 9, '10': 'errorMsg'},
    const {'1': 'epub_created', '3': 14, '4': 1, '5': 8, '10': 'epubCreated'},
    const {'1': 'deleted', '3': 15, '4': 1, '5': 8, '10': 'deleted'},
  ],
};

const BookList$json = const {
  '1': 'BookList',
  '2': const [
    const {'1': 'books', '3': 1, '4': 3, '5': 11, '6': '.model.Book', '10': 'books'},
    const {'1': 'is_full_list', '3': 2, '4': 1, '5': 8, '10': 'isFullList'},
  ],
};

const NewBookRequest$json = const {
  '1': 'NewBookRequest',
  '2': const [
    const {'1': 'title', '3': 1, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'start_page_url', '3': 2, '4': 1, '5': 9, '10': 'startPageUrl'},
    const {'1': 'author', '3': 3, '4': 1, '5': 9, '10': 'author'},
    const {'1': 'max_num_pages', '3': 4, '4': 1, '5': 5, '10': 'maxNumPages'},
  ],
};

const Chapter$json = const {
  '1': 'Chapter',
  '2': const [
    const {'1': 'chapter_no', '3': 1, '4': 1, '5': 5, '10': 'chapterNo'},
    const {'1': 'book_id', '3': 2, '4': 1, '5': 5, '10': 'bookId'},
    const {'1': 'title', '3': 3, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'html', '3': 4, '4': 1, '5': 12, '10': 'html'},
  ],
};

