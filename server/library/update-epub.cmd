@echo off
rem usage: update-epub.cmd epub-file book-dir <list-of-files>
set zipCmd="c:\program files\7-zip\7z.exe"
if not exist %zipCmd% (
echo ...
echo 7-zip is not installed!
exit /b
)

set EPUB_FILE=%1
set BOOK_DIR=%2
cd %BOOK_DIR%
%zipCmd% u %EPUB_FILE% %3 %4 %5 %6 %7 %8 %9

