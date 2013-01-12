var fs = require('fs')  //file system module

var stream = fs.createReadStream("styles.css");

//get all files on working directory
var files = fs.readdirSync(process.cwd());

files.forEach(function(file){
    //watch the file if it ends in .css
    if(/\.css/.test(file)){
        fs.watchFile(process.cwd()+'/'+file, function(){
            console.log(' - '+file+'changed!');
        });
    }
});