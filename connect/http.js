// module dependencies
var fs = require('fs'),
    http = require('http')

// create the server
var server = http.createServer(function(req,res){
  if('GET'==req.method && '/images'==req.url.substr(0,7)&&'.gif'==req.url.substr(-4)){
    fs.stat(__dirname+req.url,function(err,stat){
      if(err||!stat.isFile()){
        res.writeHead(404)
        res.end('Not found')
        return;
      }
      serve(__dirname+req.url,'application/gif')
    })
  }else if('GET'==req.method&&'/'==req.url){
    serve(__dirname+'/index.html','text/html')
  }else{
    res.writeHead(404)
    res.end('not found')
  }
  function serve(path, type){
    res.writeHead(200,{'content-type':type})
    fs.createReadStream(path).pipe(res)
  }
})

server.listen(3030)