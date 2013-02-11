var connect = require('connect'),
    time = require('./request-time')

// create a server

var server = connect.createServer()

server.use(connect.logger('dev'))    

// implement the middleware

server.use(time({time: 500}))

// fast response
server.use(function(req,res,next){
  if('/a'==req.url){
    res.end('fast')
  }else{
    next()
  }
})

// slow response
server.use(function(req,res,next){
  if('/b'==req.url){
    setTimeout(function(){
      res.writeHead(200)
      res.end('slow')
    },1000)
  }else{
    next()
  }
})

server.listen(3030)