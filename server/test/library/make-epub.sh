#!/bin/sh
EPUB_FILE=$1
EPUB_DIR=$(dirname "${EPUB_FILE}")
echo removing $EPUB_FILE
rm -f $EPUB_FILE
cd $2
zip -X -0 $EPUB_FILE mimetype
zip -X -r $EPUB_FILE * -x mimetype


