var css = require('css')
var util = require('util')
var obj = css.parse('#mydiv h1 { background-color: red } h1 { font-size: 12px; }')
console.log(util.inspect(obj, false, null));
console.log();
console.log(css.stringify(obj));