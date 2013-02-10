var superagent = require('superagent');
superagent.get('http://search.twitter.com/search.json').query({q:"Justin"}).end(function(res){console.log(res.body)})