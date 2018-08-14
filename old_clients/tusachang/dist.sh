
rm -rf dist/*

suffix=`date +"%Y%m%d_%H%M%S"`
mkdir dist

cp app/*.html dist/
cp -r app/views dist/
cp -r app/images dist/

for name in app/styles/*; do
  cat $name >> dist/style_$suffix.css
done

sed -n 's|<script src="\(scripts/.*.js\)"></script>|\1|p' dist/index.html >> dist/scripts.list
sed -n 's|<script src="\(lib/.*.js\)"></script>|\1|p' dist/index.html >> dist/vendor.list
while read name; do
  if [ "$name" != "scripts/test.js" ] 
  then
    cat app/$name >> dist/scripts_$suffix.js
  fi  
done < dist/scripts.list
while read name; do
  cat app/$name >> dist/vendor_$suffix.js
done < dist/vendor.list
sed '/<script src=.*<\/script>/ d' dist/index.html > dist/tmp1.html
sed "/<!-- bower:js -->/a \<script src=\"vendor_$suffix.js\"><\/script>" dist/tmp1.html > dist/tmp2.html
sed "/<!-- scripts:js -->/a \<script src=\"scripts_$suffix.js\"><\/script>" dist/tmp2.html > dist/tmp3.html
sed '/href="styles.*\.css/ d' dist/tmp3.html > dist/tmp4.html
sed "/<!-- build:css -->/a \<link rel=\"stylesheet\" href=\"style_$suffix.css\">" dist/tmp4.html > dist/tmp5.html

cp dist/tmp5.html dist/index.html
rm dist/tmp?.html
rm dist/*.list

rm -f dist.tar.gz
cd dist
tar -zcvf ../dist.tar.gz .
cd ..

#uglifyjs --compress --output dist/scripts_$suffix.js -- dist/scripts.js
#uglifyjs --compress --output dist/vendor_$suffix.js -- dist/vendor.js
