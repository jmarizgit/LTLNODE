var fs = require("fs");
var zip = require('node-zip')();
zip.file('test.html', 'hello there');
var data = zip.generate({base64:false,compression:'DEFLATE'});
console.log(data); //ugly data
fs.writeFile('test.zip', data, 'binary');   //write to file