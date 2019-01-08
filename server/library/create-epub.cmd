@echo off
set zipCmd="c:\program files\7-zip\7z.exe"
if not exist %zipCmd% (
echo ...
echo 7-zip is not installed!
exit /b
)

set EPUB_FILE=%1
set BOOK_DIR=%2
echo removing %EPUB_FILE%
del /f /q %EPUB_FILE%
cd %BOOK_DIR%
%zipCmd% a -r %EPUB_FILE% *

