//main.js

(function(){
    // variables
    var fs, reptxt, filedata;
    
    // required files
    fs = require('fs');
    reptxt = require ('./replacer');
    
    // reading file test.txt
    fs.readFile("../test.txt", 'utf8', function(err, data){
        if(err){
            console.error("Could not open file: %s", err);
            process.exit(1);
        }
     
        // calling replacement function
        console.log(reptxt.replacer(data,"npm","123"));
    });
}).call(this);