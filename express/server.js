var express = require('express')
var app = express()

app.set('view engine','ejs').set('views', __dirname+'/views').set('view options', {layout:false});

app.get('/', function(req,res){
  res.render('index');
})

app.listen(3030)