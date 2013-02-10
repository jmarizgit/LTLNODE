// DATA IN CHUNKS
/*require('http').createServer(function(req,res){
  res.writeHeader(200);
  res.write('hello');
  setTimeout(function(){
    res.end(' world');
  }, 500);
}).listen(3030);*/

// WRITING IMAGE
/*require('http').createServer(function(req,res){
  res.writeHeader(200,{'Content-Type':'image/png'})
  var stream = require('fs').createReadStream('play.png')
  stream.on('data', function(data){
    res.write(data);
  })
  stream.on('end', function(){
    res.end();
  })
}).listen(3030)*/
// simpler example
require('http').createServer(function(req,res){
  res.writeHeader(200,{'Content-Type':'image/png'})
  require('fs').createReadStream('play.png').pipe(res);
}).listen(3030);
