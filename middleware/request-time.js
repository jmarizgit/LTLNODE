/*
  request time middleware

  option:
  - 'time' ('number'): number of ms after which you log(100)
  @param {object} options
  @api public

*/
module.exports = function(opts){
  var time = opts.time || 100;
  return function(req,res,next){
    var timer = setTimeout(function(){
      console.log('\033[90m%s %s\033[39m \033[91mis taking too long!\033[39m', req.method, req.url)
    }, time)
    var end = res.end   // save reference to original function
    res.end = function(chunk,encoding){ // override function
      res.end = end
      res.end(chunk,encoding)
      clearTimeout(timer)
    }
    next()
  } 
}