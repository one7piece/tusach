// Code generated by protoc-gen-go. DO NOT EDIT.
// source: tusach.proto

package model

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type BookStatusType int32

const (
	BookStatusType_NONE        BookStatusType = 0
	BookStatusType_IN_PROGRESS BookStatusType = 1
	BookStatusType_COMPLETED   BookStatusType = 2
	BookStatusType_ERROR       BookStatusType = 3
	BookStatusType_ABORTED     BookStatusType = 4
)

var BookStatusType_name = map[int32]string{
	0: "NONE",
	1: "IN_PROGRESS",
	2: "COMPLETED",
	3: "ERROR",
	4: "ABORTED",
}

var BookStatusType_value = map[string]int32{
	"NONE":        0,
	"IN_PROGRESS": 1,
	"COMPLETED":   2,
	"ERROR":       3,
	"ABORTED":     4,
}

func (x BookStatusType) String() string {
	return proto.EnumName(BookStatusType_name, int32(x))
}

func (BookStatusType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{0}
}

type User struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Roles                string   `protobuf:"bytes,2,opt,name=roles,proto3" json:"roles,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *User) Reset()         { *m = User{} }
func (m *User) String() string { return proto.CompactTextString(m) }
func (*User) ProtoMessage()    {}
func (*User) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{0}
}

func (m *User) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_User.Unmarshal(m, b)
}
func (m *User) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_User.Marshal(b, m, deterministic)
}
func (m *User) XXX_Merge(src proto.Message) {
	xxx_messageInfo_User.Merge(m, src)
}
func (m *User) XXX_Size() int {
	return xxx_messageInfo_User.Size(m)
}
func (m *User) XXX_DiscardUnknown() {
	xxx_messageInfo_User.DiscardUnknown(m)
}

var xxx_messageInfo_User proto.InternalMessageInfo

func (m *User) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *User) GetRoles() string {
	if m != nil {
		return m.Roles
	}
	return ""
}

type SystemInfo struct {
	SystemUpTime         *timestamp.Timestamp `protobuf:"bytes,1,opt,name=system_up_time,json=systemUpTime,proto3" json:"system_up_time,omitempty"`
	BookLastUpdatedTime  *timestamp.Timestamp `protobuf:"bytes,2,opt,name=book_last_updated_time,json=bookLastUpdatedTime,proto3" json:"book_last_updated_time,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *SystemInfo) Reset()         { *m = SystemInfo{} }
func (m *SystemInfo) String() string { return proto.CompactTextString(m) }
func (*SystemInfo) ProtoMessage()    {}
func (*SystemInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{1}
}

func (m *SystemInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SystemInfo.Unmarshal(m, b)
}
func (m *SystemInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SystemInfo.Marshal(b, m, deterministic)
}
func (m *SystemInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemInfo.Merge(m, src)
}
func (m *SystemInfo) XXX_Size() int {
	return xxx_messageInfo_SystemInfo.Size(m)
}
func (m *SystemInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemInfo.DiscardUnknown(m)
}

var xxx_messageInfo_SystemInfo proto.InternalMessageInfo

func (m *SystemInfo) GetSystemUpTime() *timestamp.Timestamp {
	if m != nil {
		return m.SystemUpTime
	}
	return nil
}

func (m *SystemInfo) GetBookLastUpdatedTime() *timestamp.Timestamp {
	if m != nil {
		return m.BookLastUpdatedTime
	}
	return nil
}

type BookID struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BookID) Reset()         { *m = BookID{} }
func (m *BookID) String() string { return proto.CompactTextString(m) }
func (*BookID) ProtoMessage()    {}
func (*BookID) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{2}
}

func (m *BookID) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BookID.Unmarshal(m, b)
}
func (m *BookID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BookID.Marshal(b, m, deterministic)
}
func (m *BookID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BookID.Merge(m, src)
}
func (m *BookID) XXX_Size() int {
	return xxx_messageInfo_BookID.Size(m)
}
func (m *BookID) XXX_DiscardUnknown() {
	xxx_messageInfo_BookID.DiscardUnknown(m)
}

var xxx_messageInfo_BookID proto.InternalMessageInfo

func (m *BookID) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

type Book struct {
	Id                   int32                `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Status               BookStatusType       `protobuf:"varint,2,opt,name=status,proto3,enum=model.BookStatusType" json:"status,omitempty"`
	Title                string               `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Author               string               `protobuf:"bytes,4,opt,name=author,proto3" json:"author,omitempty"`
	CreatedTime          *timestamp.Timestamp `protobuf:"bytes,5,opt,name=created_time,json=createdTime,proto3" json:"created_time,omitempty"`
	CreatedBy            string               `protobuf:"bytes,6,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	BuildTimeSec         int32                `protobuf:"varint,7,opt,name=build_time_sec,json=buildTimeSec,proto3" json:"build_time_sec,omitempty"`
	StartPageUrl         string               `protobuf:"bytes,8,opt,name=start_page_url,json=startPageUrl,proto3" json:"start_page_url,omitempty"`
	CurrentPageUrl       string               `protobuf:"bytes,9,opt,name=current_page_url,json=currentPageUrl,proto3" json:"current_page_url,omitempty"`
	CurrentPageNo        int32                `protobuf:"varint,10,opt,name=current_page_no,json=currentPageNo,proto3" json:"current_page_no,omitempty"`
	MaxNumPages          int32                `protobuf:"varint,11,opt,name=max_num_pages,json=maxNumPages,proto3" json:"max_num_pages,omitempty"`
	LastUpdatedTime      *timestamp.Timestamp `protobuf:"bytes,12,opt,name=last_updated_time,json=lastUpdatedTime,proto3" json:"last_updated_time,omitempty"`
	ErrorMsg             string               `protobuf:"bytes,13,opt,name=error_msg,json=errorMsg,proto3" json:"error_msg,omitempty"`
	EpubCreated          bool                 `protobuf:"varint,14,opt,name=epub_created,json=epubCreated,proto3" json:"epub_created,omitempty"`
	Deleted              bool                 `protobuf:"varint,15,opt,name=deleted,proto3" json:"deleted,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Book) Reset()         { *m = Book{} }
func (m *Book) String() string { return proto.CompactTextString(m) }
func (*Book) ProtoMessage()    {}
func (*Book) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{3}
}

func (m *Book) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Book.Unmarshal(m, b)
}
func (m *Book) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Book.Marshal(b, m, deterministic)
}
func (m *Book) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Book.Merge(m, src)
}
func (m *Book) XXX_Size() int {
	return xxx_messageInfo_Book.Size(m)
}
func (m *Book) XXX_DiscardUnknown() {
	xxx_messageInfo_Book.DiscardUnknown(m)
}

var xxx_messageInfo_Book proto.InternalMessageInfo

func (m *Book) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Book) GetStatus() BookStatusType {
	if m != nil {
		return m.Status
	}
	return BookStatusType_NONE
}

func (m *Book) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Book) GetAuthor() string {
	if m != nil {
		return m.Author
	}
	return ""
}

func (m *Book) GetCreatedTime() *timestamp.Timestamp {
	if m != nil {
		return m.CreatedTime
	}
	return nil
}

func (m *Book) GetCreatedBy() string {
	if m != nil {
		return m.CreatedBy
	}
	return ""
}

func (m *Book) GetBuildTimeSec() int32 {
	if m != nil {
		return m.BuildTimeSec
	}
	return 0
}

func (m *Book) GetStartPageUrl() string {
	if m != nil {
		return m.StartPageUrl
	}
	return ""
}

func (m *Book) GetCurrentPageUrl() string {
	if m != nil {
		return m.CurrentPageUrl
	}
	return ""
}

func (m *Book) GetCurrentPageNo() int32 {
	if m != nil {
		return m.CurrentPageNo
	}
	return 0
}

func (m *Book) GetMaxNumPages() int32 {
	if m != nil {
		return m.MaxNumPages
	}
	return 0
}

func (m *Book) GetLastUpdatedTime() *timestamp.Timestamp {
	if m != nil {
		return m.LastUpdatedTime
	}
	return nil
}

func (m *Book) GetErrorMsg() string {
	if m != nil {
		return m.ErrorMsg
	}
	return ""
}

func (m *Book) GetEpubCreated() bool {
	if m != nil {
		return m.EpubCreated
	}
	return false
}

func (m *Book) GetDeleted() bool {
	if m != nil {
		return m.Deleted
	}
	return false
}

type BookList struct {
	Books                []*Book  `protobuf:"bytes,1,rep,name=books,proto3" json:"books,omitempty"`
	IsFullList           bool     `protobuf:"varint,2,opt,name=is_full_list,json=isFullList,proto3" json:"is_full_list,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BookList) Reset()         { *m = BookList{} }
func (m *BookList) String() string { return proto.CompactTextString(m) }
func (*BookList) ProtoMessage()    {}
func (*BookList) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{4}
}

func (m *BookList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BookList.Unmarshal(m, b)
}
func (m *BookList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BookList.Marshal(b, m, deterministic)
}
func (m *BookList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BookList.Merge(m, src)
}
func (m *BookList) XXX_Size() int {
	return xxx_messageInfo_BookList.Size(m)
}
func (m *BookList) XXX_DiscardUnknown() {
	xxx_messageInfo_BookList.DiscardUnknown(m)
}

var xxx_messageInfo_BookList proto.InternalMessageInfo

func (m *BookList) GetBooks() []*Book {
	if m != nil {
		return m.Books
	}
	return nil
}

func (m *BookList) GetIsFullList() bool {
	if m != nil {
		return m.IsFullList
	}
	return false
}

type NewBookRequest struct {
	Title                string   `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	StartPageUrl         string   `protobuf:"bytes,2,opt,name=start_page_url,json=startPageUrl,proto3" json:"start_page_url,omitempty"`
	Author               string   `protobuf:"bytes,3,opt,name=author,proto3" json:"author,omitempty"`
	MaxNumPages          int32    `protobuf:"varint,4,opt,name=max_num_pages,json=maxNumPages,proto3" json:"max_num_pages,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NewBookRequest) Reset()         { *m = NewBookRequest{} }
func (m *NewBookRequest) String() string { return proto.CompactTextString(m) }
func (*NewBookRequest) ProtoMessage()    {}
func (*NewBookRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{5}
}

func (m *NewBookRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NewBookRequest.Unmarshal(m, b)
}
func (m *NewBookRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NewBookRequest.Marshal(b, m, deterministic)
}
func (m *NewBookRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NewBookRequest.Merge(m, src)
}
func (m *NewBookRequest) XXX_Size() int {
	return xxx_messageInfo_NewBookRequest.Size(m)
}
func (m *NewBookRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_NewBookRequest.DiscardUnknown(m)
}

var xxx_messageInfo_NewBookRequest proto.InternalMessageInfo

func (m *NewBookRequest) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *NewBookRequest) GetStartPageUrl() string {
	if m != nil {
		return m.StartPageUrl
	}
	return ""
}

func (m *NewBookRequest) GetAuthor() string {
	if m != nil {
		return m.Author
	}
	return ""
}

func (m *NewBookRequest) GetMaxNumPages() int32 {
	if m != nil {
		return m.MaxNumPages
	}
	return 0
}

type Chapter struct {
	ChapterNo            int32    `protobuf:"varint,1,opt,name=chapter_no,json=chapterNo,proto3" json:"chapter_no,omitempty"`
	BookId               int32    `protobuf:"varint,2,opt,name=book_id,json=bookId,proto3" json:"book_id,omitempty"`
	Title                string   `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Html                 []byte   `protobuf:"bytes,4,opt,name=html,proto3" json:"html,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Chapter) Reset()         { *m = Chapter{} }
func (m *Chapter) String() string { return proto.CompactTextString(m) }
func (*Chapter) ProtoMessage()    {}
func (*Chapter) Descriptor() ([]byte, []int) {
	return fileDescriptor_59f56d4f49e3c994, []int{6}
}

func (m *Chapter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Chapter.Unmarshal(m, b)
}
func (m *Chapter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Chapter.Marshal(b, m, deterministic)
}
func (m *Chapter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Chapter.Merge(m, src)
}
func (m *Chapter) XXX_Size() int {
	return xxx_messageInfo_Chapter.Size(m)
}
func (m *Chapter) XXX_DiscardUnknown() {
	xxx_messageInfo_Chapter.DiscardUnknown(m)
}

var xxx_messageInfo_Chapter proto.InternalMessageInfo

func (m *Chapter) GetChapterNo() int32 {
	if m != nil {
		return m.ChapterNo
	}
	return 0
}

func (m *Chapter) GetBookId() int32 {
	if m != nil {
		return m.BookId
	}
	return 0
}

func (m *Chapter) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Chapter) GetHtml() []byte {
	if m != nil {
		return m.Html
	}
	return nil
}

func init() {
	proto.RegisterEnum("model.BookStatusType", BookStatusType_name, BookStatusType_value)
	proto.RegisterType((*User)(nil), "model.User")
	proto.RegisterType((*SystemInfo)(nil), "model.SystemInfo")
	proto.RegisterType((*BookID)(nil), "model.BookID")
	proto.RegisterType((*Book)(nil), "model.Book")
	proto.RegisterType((*BookList)(nil), "model.BookList")
	proto.RegisterType((*NewBookRequest)(nil), "model.NewBookRequest")
	proto.RegisterType((*Chapter)(nil), "model.Chapter")
}

func init() { proto.RegisterFile("tusach.proto", fileDescriptor_59f56d4f49e3c994) }

var fileDescriptor_59f56d4f49e3c994 = []byte{
	// 804 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x54, 0xdb, 0x6e, 0x23, 0x45,
	0x10, 0x65, 0xec, 0xf1, 0xad, 0x66, 0x7c, 0xa1, 0x81, 0x30, 0xca, 0x0a, 0x91, 0xb5, 0x60, 0x15,
	0x21, 0xe1, 0x8d, 0x9c, 0x27, 0x1e, 0x90, 0xd8, 0x24, 0xde, 0x95, 0xa5, 0xac, 0x1d, 0xda, 0xc9,
	0xf3, 0x68, 0xc6, 0xee, 0xd8, 0xa3, 0xf4, 0xb8, 0x87, 0xbe, 0x88, 0xf5, 0x1f, 0xf0, 0x17, 0x7c,
	0x05, 0x5f, 0xc1, 0x4f, 0xa1, 0xae, 0xb6, 0x15, 0xcf, 0x7a, 0x43, 0xb4, 0x6f, 0x5d, 0xa7, 0x4e,
	0x55, 0x75, 0x55, 0x9d, 0x6e, 0x08, 0xb5, 0x51, 0xc9, 0x7c, 0x35, 0x28, 0xa4, 0xd0, 0x82, 0xd4,
	0x72, 0xb1, 0x60, 0xfc, 0xf8, 0xc5, 0x52, 0x88, 0x25, 0x67, 0xaf, 0x11, 0x4c, 0xcd, 0xfd, 0x6b,
	0x96, 0x17, 0x7a, 0xe3, 0x38, 0xc7, 0xdf, 0x7f, 0xec, 0xd4, 0x59, 0xce, 0x94, 0x4e, 0xf2, 0xc2,
	0x11, 0xfa, 0x67, 0xe0, 0xdf, 0x29, 0x26, 0x09, 0x01, 0x7f, 0x9d, 0xe4, 0x2c, 0xf2, 0x4e, 0xbc,
	0xd3, 0x16, 0xc5, 0x33, 0xf9, 0x1a, 0x6a, 0x52, 0x70, 0xa6, 0xa2, 0x0a, 0x82, 0xce, 0xe8, 0xff,
	0xed, 0x01, 0xcc, 0x36, 0x4a, 0xb3, 0x7c, 0xbc, 0xbe, 0x17, 0xe4, 0x37, 0xe8, 0x28, 0xb4, 0x62,
	0x53, 0xc4, 0x36, 0x3b, 0xa6, 0x08, 0x86, 0xc7, 0x03, 0x57, 0x7a, 0xb0, 0x2b, 0x3d, 0xb8, 0xdd,
	0x95, 0xa6, 0xa1, 0x8b, 0xb8, 0x2b, 0x2c, 0x44, 0xa6, 0x70, 0x94, 0x0a, 0xf1, 0x10, 0xf3, 0x44,
	0xe9, 0xd8, 0x14, 0x8b, 0x44, 0xb3, 0x85, 0xcb, 0x54, 0x79, 0x36, 0xd3, 0x57, 0x36, 0xf2, 0x3a,
	0x51, 0xfa, 0xce, 0xc5, 0x59, 0x4f, 0x3f, 0x82, 0xfa, 0x85, 0x10, 0x0f, 0xe3, 0x2b, 0xd2, 0x81,
	0x4a, 0xb6, 0xc0, 0x0b, 0xd5, 0x68, 0x25, 0x5b, 0xf4, 0xff, 0xf1, 0xc1, 0xb7, 0xae, 0x8f, 0x1d,
	0xe4, 0x67, 0xa8, 0x2b, 0x9d, 0x68, 0xe3, 0x7a, 0xed, 0x0c, 0xbf, 0x19, 0xe0, 0x70, 0x07, 0x96,
	0x3c, 0x43, 0xc7, 0xed, 0xa6, 0x60, 0x74, 0x4b, 0xb2, 0x93, 0xd1, 0x99, 0xe6, 0x2c, 0xaa, 0xba,
	0xc9, 0xa0, 0x41, 0x8e, 0xa0, 0x9e, 0x18, 0xbd, 0x12, 0x32, 0xf2, 0x11, 0xde, 0x5a, 0xe4, 0x57,
	0x08, 0xe7, 0x92, 0x3d, 0xb6, 0x55, 0x7b, 0xb6, 0xad, 0x60, 0xcb, 0xc7, 0xf9, 0x7c, 0x07, 0xb0,
	0x0b, 0x4f, 0x37, 0x51, 0x1d, 0x53, 0xb7, 0xb6, 0xc8, 0xc5, 0x86, 0xfc, 0x00, 0x9d, 0xd4, 0x64,
	0xdc, 0xe5, 0x8e, 0x15, 0x9b, 0x47, 0x0d, 0x6c, 0x2b, 0x44, 0xd4, 0x66, 0x98, 0xb1, 0xb9, 0x65,
	0x29, 0x9d, 0x48, 0x1d, 0x17, 0xc9, 0x92, 0xc5, 0x46, 0xf2, 0xa8, 0x89, 0x89, 0x42, 0x44, 0x6f,
	0x92, 0x25, 0xbb, 0x93, 0x9c, 0x9c, 0x42, 0x6f, 0x6e, 0xa4, 0x64, 0xeb, 0x3d, 0x5e, 0x0b, 0x79,
	0x9d, 0x2d, 0xbe, 0x63, 0xbe, 0x82, 0x6e, 0x89, 0xb9, 0x16, 0x11, 0x60, 0xd9, 0xf6, 0x1e, 0x71,
	0x22, 0x48, 0x1f, 0xda, 0x79, 0xf2, 0x21, 0x5e, 0x9b, 0x1c, 0x79, 0x2a, 0x0a, 0x90, 0x15, 0xe4,
	0xc9, 0x87, 0x89, 0xc9, 0x2d, 0x49, 0x91, 0xb7, 0xf0, 0xe5, 0xe1, 0xee, 0xc3, 0x67, 0x87, 0xd4,
	0xe5, 0xe5, 0xbd, 0x93, 0x17, 0xd0, 0x62, 0x52, 0x0a, 0x19, 0xe7, 0x6a, 0x19, 0xb5, 0xf1, 0xda,
	0x4d, 0x04, 0xde, 0xab, 0x25, 0x79, 0x09, 0x21, 0x2b, 0x4c, 0x1a, 0x6f, 0x07, 0x17, 0x75, 0x4e,
	0xbc, 0xd3, 0x26, 0x0d, 0x2c, 0x76, 0xe9, 0x20, 0x12, 0x41, 0x63, 0xc1, 0x38, 0xb3, 0xde, 0x2e,
	0x7a, 0x77, 0x66, 0x7f, 0x0a, 0x4d, 0xab, 0x84, 0xeb, 0x4c, 0x69, 0xf2, 0x12, 0x6a, 0x56, 0x74,
	0x2a, 0xf2, 0x4e, 0xaa, 0xa7, 0xc1, 0x30, 0xd8, 0x53, 0x0a, 0x75, 0x1e, 0x72, 0x02, 0x61, 0xa6,
	0xe2, 0x7b, 0xc3, 0x79, 0xcc, 0x33, 0xa5, 0x51, 0x53, 0x4d, 0x0a, 0x99, 0x7a, 0x6b, 0x38, 0xb7,
	0x49, 0xfa, 0x7f, 0x79, 0xd0, 0x99, 0xb0, 0x3f, 0x31, 0x88, 0xfd, 0x61, 0x98, 0xd2, 0x8f, 0x9a,
	0xf2, 0xf6, 0x35, 0x75, 0xb8, 0xb7, 0xca, 0x27, 0xf6, 0xf6, 0xa8, 0xbc, 0x6a, 0x49, 0x79, 0x07,
	0xd3, 0xf7, 0x0f, 0xa6, 0xdf, 0x7f, 0x80, 0xc6, 0xe5, 0x2a, 0x29, 0x34, 0x93, 0xa8, 0x34, 0x77,
	0xb4, 0xfb, 0x74, 0xaf, 0xa3, 0xb5, 0x45, 0x26, 0x82, 0x7c, 0x0b, 0x0d, 0x7c, 0xa8, 0xd9, 0x02,
	0x2f, 0x51, 0xa3, 0x75, 0x6b, 0x8e, 0x17, 0x4f, 0x3c, 0x07, 0x02, 0xfe, 0x4a, 0xe7, 0x1c, 0x6b,
	0x86, 0x14, 0xcf, 0x3f, 0x51, 0xe8, 0x94, 0x9f, 0x14, 0x69, 0x82, 0x3f, 0x99, 0x4e, 0x46, 0xbd,
	0x2f, 0x48, 0x17, 0x82, 0xf1, 0x24, 0xbe, 0xa1, 0xd3, 0x77, 0x74, 0x34, 0x9b, 0xf5, 0x3c, 0xd2,
	0x86, 0xd6, 0xe5, 0xf4, 0xfd, 0xcd, 0xf5, 0xe8, 0x76, 0x74, 0xd5, 0xab, 0x90, 0x16, 0xd4, 0x46,
	0x94, 0x4e, 0x69, 0xaf, 0x4a, 0x02, 0x68, 0xbc, 0xb9, 0x98, 0x52, 0x8b, 0xfb, 0xc3, 0x7f, 0xab,
	0x50, 0xbf, 0xc5, 0x8f, 0x91, 0x9c, 0x43, 0xf3, 0x1d, 0xd3, 0x17, 0xb8, 0x84, 0xa3, 0x03, 0xe9,
	0x8c, 0xec, 0xc7, 0x78, 0xdc, 0xdd, 0x5b, 0x18, 0x2e, 0xf4, 0x17, 0x80, 0xdf, 0x0d, 0x93, 0x1b,
	0x17, 0xf6, 0x3f, 0x8a, 0x3b, 0x0c, 0x1d, 0x42, 0x6b, 0x66, 0x52, 0x35, 0x97, 0x59, 0xca, 0x9e,
	0x2c, 0xb8, 0xaf, 0x90, 0x33, 0x8f, 0xfc, 0x08, 0x8d, 0xed, 0x1d, 0x49, 0x7b, 0xcf, 0x33, 0xbe,
	0x2a, 0x11, 0xc9, 0x19, 0x80, 0xd3, 0x25, 0x5a, 0xbb, 0xff, 0xa8, 0xac, 0x99, 0x72, 0xc4, 0x2b,
	0x00, 0xf7, 0x1a, 0xd0, 0xda, 0x77, 0x95, 0x79, 0xe7, 0x00, 0x57, 0xa8, 0xeb, 0x4f, 0xdd, 0xe1,
	0x89, 0x26, 0x6c, 0xa7, 0x6f, 0x52, 0x21, 0xf5, 0xe7, 0xc4, 0x9c, 0x03, 0x50, 0xa6, 0x4c, 0xfe,
	0x39, 0x85, 0xd2, 0x3a, 0xda, 0xe7, 0xff, 0x05, 0x00, 0x00, 0xff, 0xff, 0xac, 0x00, 0x31, 0x79,
	0xec, 0x06, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// TusachClient is the client API for Tusach service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TusachClient interface {
	GetBooks(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*BookList, error)
	QueryBooks(ctx context.Context, in *timestamp.Timestamp, opts ...grpc.CallOption) (*BookList, error)
	Subscribe(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (Tusach_SubscribeClient, error)
	GetBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*Book, error)
	CreateBook(ctx context.Context, in *NewBookRequest, opts ...grpc.CallOption) (*Book, error)
	UpdateBook(ctx context.Context, in *Book, opts ...grpc.CallOption) (*Book, error)
	DeleteBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*empty.Empty, error)
	AbortBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*empty.Empty, error)
	ResumeBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*empty.Empty, error)
}

type tusachClient struct {
	cc *grpc.ClientConn
}

func NewTusachClient(cc *grpc.ClientConn) TusachClient {
	return &tusachClient{cc}
}

func (c *tusachClient) GetBooks(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*BookList, error) {
	out := new(BookList)
	err := c.cc.Invoke(ctx, "/model.Tusach/GetBooks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) QueryBooks(ctx context.Context, in *timestamp.Timestamp, opts ...grpc.CallOption) (*BookList, error) {
	out := new(BookList)
	err := c.cc.Invoke(ctx, "/model.Tusach/QueryBooks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) Subscribe(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (Tusach_SubscribeClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Tusach_serviceDesc.Streams[0], "/model.Tusach/Subscribe", opts...)
	if err != nil {
		return nil, err
	}
	x := &tusachSubscribeClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Tusach_SubscribeClient interface {
	Recv() (*Book, error)
	grpc.ClientStream
}

type tusachSubscribeClient struct {
	grpc.ClientStream
}

func (x *tusachSubscribeClient) Recv() (*Book, error) {
	m := new(Book)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *tusachClient) GetBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*Book, error) {
	out := new(Book)
	err := c.cc.Invoke(ctx, "/model.Tusach/GetBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) CreateBook(ctx context.Context, in *NewBookRequest, opts ...grpc.CallOption) (*Book, error) {
	out := new(Book)
	err := c.cc.Invoke(ctx, "/model.Tusach/CreateBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) UpdateBook(ctx context.Context, in *Book, opts ...grpc.CallOption) (*Book, error) {
	out := new(Book)
	err := c.cc.Invoke(ctx, "/model.Tusach/UpdateBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) DeleteBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/model.Tusach/DeleteBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) AbortBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/model.Tusach/AbortBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tusachClient) ResumeBook(ctx context.Context, in *BookID, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/model.Tusach/ResumeBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TusachServer is the server API for Tusach service.
type TusachServer interface {
	GetBooks(context.Context, *empty.Empty) (*BookList, error)
	QueryBooks(context.Context, *timestamp.Timestamp) (*BookList, error)
	Subscribe(*empty.Empty, Tusach_SubscribeServer) error
	GetBook(context.Context, *BookID) (*Book, error)
	CreateBook(context.Context, *NewBookRequest) (*Book, error)
	UpdateBook(context.Context, *Book) (*Book, error)
	DeleteBook(context.Context, *BookID) (*empty.Empty, error)
	AbortBook(context.Context, *BookID) (*empty.Empty, error)
	ResumeBook(context.Context, *BookID) (*empty.Empty, error)
}

func RegisterTusachServer(s *grpc.Server, srv TusachServer) {
	s.RegisterService(&_Tusach_serviceDesc, srv)
}

func _Tusach_GetBooks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).GetBooks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/GetBooks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).GetBooks(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_QueryBooks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(timestamp.Timestamp)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).QueryBooks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/QueryBooks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).QueryBooks(ctx, req.(*timestamp.Timestamp))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_Subscribe_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(empty.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TusachServer).Subscribe(m, &tusachSubscribeServer{stream})
}

type Tusach_SubscribeServer interface {
	Send(*Book) error
	grpc.ServerStream
}

type tusachSubscribeServer struct {
	grpc.ServerStream
}

func (x *tusachSubscribeServer) Send(m *Book) error {
	return x.ServerStream.SendMsg(m)
}

func _Tusach_GetBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BookID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).GetBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/GetBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).GetBook(ctx, req.(*BookID))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_CreateBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NewBookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).CreateBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/CreateBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).CreateBook(ctx, req.(*NewBookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_UpdateBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Book)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).UpdateBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/UpdateBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).UpdateBook(ctx, req.(*Book))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_DeleteBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BookID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).DeleteBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/DeleteBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).DeleteBook(ctx, req.(*BookID))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_AbortBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BookID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).AbortBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/AbortBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).AbortBook(ctx, req.(*BookID))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tusach_ResumeBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BookID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TusachServer).ResumeBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/model.Tusach/ResumeBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TusachServer).ResumeBook(ctx, req.(*BookID))
	}
	return interceptor(ctx, in, info, handler)
}

var _Tusach_serviceDesc = grpc.ServiceDesc{
	ServiceName: "model.Tusach",
	HandlerType: (*TusachServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetBooks",
			Handler:    _Tusach_GetBooks_Handler,
		},
		{
			MethodName: "QueryBooks",
			Handler:    _Tusach_QueryBooks_Handler,
		},
		{
			MethodName: "GetBook",
			Handler:    _Tusach_GetBook_Handler,
		},
		{
			MethodName: "CreateBook",
			Handler:    _Tusach_CreateBook_Handler,
		},
		{
			MethodName: "UpdateBook",
			Handler:    _Tusach_UpdateBook_Handler,
		},
		{
			MethodName: "DeleteBook",
			Handler:    _Tusach_DeleteBook_Handler,
		},
		{
			MethodName: "AbortBook",
			Handler:    _Tusach_AbortBook_Handler,
		},
		{
			MethodName: "ResumeBook",
			Handler:    _Tusach_ResumeBook_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Subscribe",
			Handler:       _Tusach_Subscribe_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "tusach.proto",
}
