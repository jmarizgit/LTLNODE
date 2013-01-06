//module dependencies
var fs  = require('fs') //file system module

//list of present directories
//console.log(fs.readdirSync(__dirname));
/*fs.readdir( '.', function async(err, files){
    if(!err)
        console.log (files);
});*/

//first part of application
fs.readdir(process.cwd(),function(err,files){
    console.log('');
    if(!files.length){
        return console.log('\t\033[31m No files to show!\033[39m\n');
    }
    
    console.log("\tSelect which file or directory you want to see\n");

    function file(i){
        var filename = files[i];
        fs.stat(__dirname+'/'+filename,function(err,stat){
            if(stat.isDirectory()){
                console.log("\t"+i+"\033[36m - "+filename+"/\33[39m");
            }else{
                console.log("\t"+i+"\033[90m - "+filename+"/\33[39m");
            }//if_else
            i++;
            if(i == files.length){
                console.log('');
                process.stdout.write('\033[33mEnter your choice: \033[39m');
                process.stdin.resume();
            }else{
                file(i);
            }
        });//fs.stat()
    }//file()
    file(0);
});
