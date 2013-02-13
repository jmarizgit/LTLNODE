var connect = require('connect');

process.stdin.resume();
process.stdin.setEncoding('ascii');

var server = connect(
  connect.basicAuth(function(user,pass,fn){
  process.stdout.write('Allow User \033[96m'+user+'\033[39m '+'with pass \033[90m'+pass+'\033[39m ? [Y/N]: ');
  process.stdin.once('data', function(data){
    if(data[0] == 'y'){
      fn(null, {username:user})
    }else{
      fn(new Error('Unauthorized'));
    }
  });
}),
function(req,res){
  res.writeHead(200)
  res.end('welcome to the protected area '+req.remoteUser.username)
});

server.listen(3030);