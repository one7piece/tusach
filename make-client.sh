#!/bin/bash

if [ "$1" == "update" ]; then
echo "Updating bower dependencies..."
bower update
if [ $? -ne 0 ] ; then
exit 1
fi
fi

find ./client/tusachang/bower_components -type f \( -iname "*.min.js" ! -path "*/angular-material/modules/*" \) -exec cp {} ./client/tusachang/app/lib \;
cp ./client/tusachang/bower_components/matchmedia-ng/matchmedia-ng.js ./client/tusachang/app/lib
cp ./client/tusachang/bower_components/angular-material/angular-material.min.css ./client/tusachang/app/styles

destdir=./dist/html
appdir=./client/tusachang/app
echo "Generating client directory $destdir"
if [ -d "$destdir" ]; then
rm -r $destdir
fi

suffix=`date +"%Y%m%d_%H%M%S"`
mkdir $destdir

cp $appdir/*.html $destdir/
cp -r $appdir/views $destdir/
cp -r $appdir/images $destdir/

for name in $appdir/styles/*; do
  cat $name >> $destdir/style_$suffix.css
done

sed -n 's|<script src="\(scripts/.*.js\)"></script>|\1|p' $destdir/index.html >> $destdir/scripts.list
sed -n 's|<script src="\(lib/.*.js\)"></script>|\1|p' $destdir/index.html >> $destdir/vendor.list
while read name; do
  if [ "$name" != "scripts/test.js" ] 
  then
    cat $appdir/$name >> $destdir/scripts_$suffix.js
  fi  
done < $destdir/scripts.list
while read name; do
  cat $appdir/$name >> $destdir/vendor_$suffix.js
done < $destdir/vendor.list
sed '/<script src=.*<\/script>/ d' $destdir/index.html > $destdir/tmp1.html
sed "/<!-- bower:js -->/a \<script src=\"vendor_$suffix.js\"><\/script>" $destdir/tmp1.html > $destdir/tmp2.html
sed "/<!-- scripts:js -->/a \<script src=\"scripts_$suffix.js\"><\/script>" $destdir/tmp2.html > $destdir/tmp3.html
sed '/href="styles.*\.css/ d' $destdir/tmp3.html > $destdir/tmp4.html
sed "/<!-- build:css -->/a \<link rel=\"stylesheet\" href=\"style_$suffix.css\">" $destdir/tmp4.html > $destdir/tmp5.html

cp $destdir/tmp5.html $destdir/index.html
rm $destdir/tmp?.html
rm $destdir/*.list

#rm -f dist.tar.gz
#cd dist
#tar -zcvf ../dist.tar.gz .
#cd ..

#uglifyjs --compress --output dist/scripts_$suffix.js -- dist/scripts.js
#uglifyjs --compress --output dist/vendor_$suffix.js -- dist/vendor.js
