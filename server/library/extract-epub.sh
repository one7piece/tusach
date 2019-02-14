#!/bin/sh
# usage: extract-epub.sh epub-file book-dir <file-list>
EPUB_FILE=$1
BOOK_DIR=$2

#list=
#for a in "$@"
#do
#  if [ "$a" != "$1" ] && [ "$a" != "$2" ]; then
#    list+=" $a"
#  fi
#done

#
# -X exclude extra file attributes, -0 store only, -r recurse into directories, -x exclude the following file names
#
cd $BOOK_DIR
echo extracting files: $3 $4 $5 $6 $7 $8 $9 from $EPUB_FILE
unzip -q -o $EPUB_FILE $3 $4 $5 $6 $7 $8 $9 -d ./


