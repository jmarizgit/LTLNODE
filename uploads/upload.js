var connect = require('connect')
var server = connect.createServer()
server.use(connect.logger('dev'))  
server.use(connect.bodyParser())
server.use(connect.static('static'))

//middleware
server.use(function(req,res,next){
  if('POST'==req.method){
    console.log(req.body.file)
  }else{
    next()
  }
})

server.use(function(req,res,next){
  if('POST' == req.method && req.body.file){
    fs.readFile(req.body.file.path, 'utf8', function(err,data){
      if (err) {
        res.writeHead(500)
        res.end('error')
        return
      }
      res.writeHead(200,{'content-type':'text/html'})
      res.end([
        '<h3>File: '+req.body.file.name+'</h3>',
        '<h4>type: '+req.body.file.type+'</h4>',
        '<h4>contents:</h4><pref>'+data+'</pre>'].join(''))
    })
  }else{
    next();
  }
})

server.listen(3030)


