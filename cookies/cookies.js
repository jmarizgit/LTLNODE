//module dependencies
var server = require('http')

//middleware
server.createServer(function(req,res){
  res.writeHead(200, {
    'Set-Cookie': 'mycookie=test',
    'Content-Type': 'text/plain'
  });
res.end("hello world")
}).listen(3030);

//more at: http://stackoverflow.com/a/3409200/485513