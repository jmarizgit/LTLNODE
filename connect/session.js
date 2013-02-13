var connect = require('connect')
  , RedisStore = require('connect-redis')(connect)
  , users = require('./users');  // you can require JSON files as long you have at least an empty object on the file

var server = connect(
    connect.logger('dev')
  , connect.bodyParser()
  , connect.cookieParser()
  , connect.session({ store : new RedisStore, secret : 'my app secret' }) // session need to be preceded by cookieParser()
  );

server.use(loggedIn).use(displayForm).use(credentials).use(logout).listen(3030);

// middlewares
function loggedIn (req, res, next) {
  if ('/' == req.url && req.session.logged_in) {
    res.writeHead (200, { 
      'content-type' : 'text/html' 
    });
    res.end ([
        'Welcome back, <b>'
      , req.session.name
      , '</b>. <a href="logout">Logout</a>'].join(''));
  } else {
    next();
  }
}
function displayForm (req, res, next) {
  if ('/' == req.url && 'GET' == req.method) {
    res.writeHead (200, { 'content-type' : 'text/html' });
    res.end ([
        '<form action="/login" method="POST">'
      , '<fieldset>'
      , '<legend>Please log in</legend>'
      , '<p>User: <input type="text" name="user"></p>'
      , '<p>Password: <input type="password" name="password"></p>'
      , '<button>Submit</button>'
      , '</fieldset>'
      , '</form>'].join(''));
  } else {
    next();
  }
}
function credentials (req, res, next) {
  if ('/login' == req.url && 'POST' == req.method) {
    res.writeHead (200);
    if (!users[req.body.user] || req.body.password != users[req.body.user].password) {
      res.end ('Bad username/password');
    } else {
      req.session.logged_in = true;
      req.session.name = users[req.body.user].name;
      res.end('Authenticated!');
    }//if_else
  } else {
    next();
  }//if_else
}
function logout (req, res, next) {
  if ('/logout' == req.url) {
    req.session.logged_in = false;
    res.writeHead (200);
    res.end ('Logged out!');
  } else {
    next();
  }//if_else
}