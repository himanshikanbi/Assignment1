var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./Files/text1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./Files/text1.txt','utf-8'));
  
console.log("File Decompressed.");