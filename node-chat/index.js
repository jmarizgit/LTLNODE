// Module dependencies
var net = require('net');
var count = 0, // connections counter
    users = {} // keep track of users
var server = net.createServer(function(conn) { // Create server
    var nickname; // nickname for current connection
    conn.setEncoding('utf8'); // defining charset for output messages
    console.log('\033[90m\tNew connection!\033[39m'); // handle connection
    conn.write('\n > Welcome to \033[92mnode-chat\033[39m!' + '\n' + count + ' other people are connected at this time.' + '\n > please write your name and press enter: ');
    count++; // increament connections counter
    conn.on('data', function(data){
        data = data.replace('\r\n',''); // remove enter chars
        if(!nickname) {
            if(users.data) { //check if user is already on list (object)
                conn.write('\033[93m> nickname already in use. try again:\033[39m ');
                return;
            }else{
                nickname = data;
                users[nickname] = conn;
                for (var i in users) {
                    users[i].write('\033[90m> ' + nickname + ' joined the room\033[39m\n');
                }// for
            }// ifelse
        }else{ //consider as a chat message
            for(var i in users) {
                if(i != nickname) {
                    users[i].write('\033[39m ' + data + '\n');
                }
            }
        }
        // console.log(data);
    });
    conn.on('close', function(){
        count--;
    });
});
server.listen(9090, function() { // Listen
    console.log('\033[96m\tServer listening on *:9090\033[39m');
});