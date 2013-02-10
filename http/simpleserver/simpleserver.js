var qs = require('querystring')
require('http').createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/html'})
  if('/'==req.url){
  res.end([
    '<form method="POST" action="/url">',
    '<h1>My form</h1>',
    '<fieldset>',
    '<label>Personal information</label>',
    '<p>what is your name?</p>',
    '<input type="text" name="name">',
    '<p><button>submit</button></p>',
    '</form>'].join(''))
  }else if('/url'==req.url && 'POST' == req.method){
    var body = '';
    req.on('data', function(chunk){
      body+=chunk
    })
    req.on('end', function(){
      //res.end('<p>content-type: '+req.headers['content-type']+'</p><p>Data:</p><pre>'+body+'</pre>')
      res.end('<p>your name is <b>'+qs.parse(body).name+'</b></p>');
    })
    //res.end('You sent a <em>'+req.method+'</em> request')
  }
}).listen(3030)