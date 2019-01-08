#!/bin/sh
# usage: update-epub.sh epub-file book-dir
EPUB_FILE=$1
BOOK_DIR=$2
#
# -X exclude extra file attributes, -0 store only, -r recurse into directories, -x exclude the following file names
#
cd $BOOK_DIR
zip -X -u -r $EPUB_FILE chapter*.html content.opf toc.ncx

