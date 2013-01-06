//module dependencies
var fs = require('fs'); //file system module

//list of present directories
//console.log(fs.readdirSync(__dirname));
fs.readdir( '.', function async ( err, files ) {
    console.log ( files );
});
