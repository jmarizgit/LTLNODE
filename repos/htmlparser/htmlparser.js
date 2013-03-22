var htmlparser = require("htmlparser");
var sys = require("sys");

var rawHtml = "<p>hello <span>world</span> again</p>";

var handler = new htmlparser.DefaultHandler(function (error, dom) {
    if (error)
        console.log("error");
    else
        console.log("success");
});

var parser = new htmlparser.Parser(handler);
parser.parseComplete(rawHtml);
sys.puts(sys.inspect(handler.dom, false, null));