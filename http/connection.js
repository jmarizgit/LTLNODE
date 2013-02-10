require('http').createServer(function(req,res){
  console.log(req.headers)
  res.writeHead(200,{'content-type':'text/html'})
  res.end('hello world')
}).listen(3030)