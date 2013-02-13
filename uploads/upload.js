var connect = require('connect')
var fs = require('fs')
var server = connect.createServer()
//chain syntax works
server.use(connect.logger('dev')).use(connect.bodyParser()).use(connect.static('static')).use(method).listen(3030)

//middleware
function method(req,res,next){
  console.log(req.body.file);
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
    next()
  }
}