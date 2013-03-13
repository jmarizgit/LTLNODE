var css = require('css')
var util = require('util')
var obj = css.parse('#mydiv { background-color: red }')
console.log(util.inspect(obj, false, null));