//module dependencies
var fs  =   require('fs'), //file system module
            stdin = process.stdin,
            stdout = process.stdout

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

    var stats = []; //cache array

    function file(i){
        var filename = files[i];

        fs.stat(__dirname+'/'+filename,function(err,stat){
            
            stats[i] = stat;    //caching stats for file

            if(stat.isDirectory()){
                console.log("\t"+i+"\033[36m - "+filename+"/\33[39m");
            }else{
                console.log("\t"+i+"\033[90m - "+filename+"\33[39m");
            }//if_else

            if(++i == files.length){
                read();
            }else{
                file(i);
            }
        });//fs.stat()
    }//file()
    function read(){
        console.log('');
        stdout.write('\033[33mEnter your choice: \033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data',option);
    }//read()
    function option(data){
        var filename = files[Number(data)];

        if(!filename){
            stdout.write('\033[31mEnter your choice: \033[39m');
        }else{
            stdin.pause();
            if(stats[Number(data)].isDirectory()){
                fs.readdir(__dirname+'/'+filename,function(err,files){
                    console.log('');
                    console.log('\t('+files.length+' file(s))');
                    files.forEach(function(file){
                        console.log('\t- '+file);
                    });
                    console.log('');
                });
            }else{
                fs.readFile(__dirname+'/'+filename,'utf8',function(err,data){
                    console.log('');
                    console.log('\033[90m'+data.replace(/(.*)/g, '\t$1')+'\033[39m');
                });
            }
            
        }//ifelse
    }//option()

    file(0);
});
