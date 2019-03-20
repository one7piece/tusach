#!/bin/sh
# usage: update-epub.sh epub-file book-dir <list-of-files>
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
#zip -X -u -r $EPUB_FILE $list chapter*.html content.opf toc.ncx
echo update $EPUB_FILE with files: $3 $4 $5 $6 $7 $8 $9
zip $EPUB_FILE $3 $4 $5 $6 $7 $8 $9


