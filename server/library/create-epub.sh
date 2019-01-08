#!/bin/sh
# usage: create-epub.sh epub-file book-dir
EPUB_FILE=$1
BOOK_DIR=$2
echo removing $EPUB_FILE
rm -f $EPUB_FILE
#
# -X exclude extra file attributes, -0 store only, -r recurse into directories, -x exclude the following file names
#
cd $BOOK_DIR
zip -X -0 $EPUB_FILE mimetype
zip -X -r $EPUB_FILE * -x mimetype


