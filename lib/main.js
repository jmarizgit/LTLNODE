//main.js

(function(){
    // variables
    var fs, reptxt, filedata;
    
    // required files
    fs = require('fs'); //handles filesystem
    reptxt = require ('../bin/replacer'); //replacer function
    
    // reading file test.txt
    fs.readFile(process.argv[2], 'utf8', function(err, data){
        if(err){
            console.error("Could not open file: %s", err);
            process.exit(1);
        }
     
        // calling replacement function
        filedata = reptxt.replacer(process.argv[3],process.argv[4]);
        
        // writing replaced test into a new file
        fs.writeFile("../out.txt", filedata, function(err){
            if(err){
                console.error("Error saving file %s", err);
                process.exit(1);
            }
            console.log(filedata);
            console.log('out.txt file saved!');            
        });    
    });
}).call(this);