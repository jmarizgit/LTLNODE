var build = require('consolidate-build');

build.less.render('.class { width: 1 + 1 }', { compress: true}, function(err, css){
  if (err) throw err;
  console.log(css);
});