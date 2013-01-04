//main.js

(function(){
    // variables
    var fs, reptxt, filedata;
    
    // required files
    fs = require('fs');
    reptxt = require ('../bin/replacer');
    
    // reading file test.txt
    fs.readFile("../test.txt", 'utf8', function(err, data){
        if(err){
            console.error("Could not open file: %s", err);
            process.exit(1);
        }
     
        // calling replacement function
        filedata = reptxt.replacer(data,"npm","123");
        
        // writing replaced test into a new file
        fs.writeFile("../out.txt", filedata, function(err){
            if(err){
                console.error("Error saving file %s", err);
                process.exit(1);
            }
            console.log('out.txt file saved!');
        });    
    });
}).call(this);