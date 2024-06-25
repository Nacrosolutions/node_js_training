const { parse, stringify, escape, unescape  } = require('querystring');


// =========== 1. Parse a URL query string ========
const res01 = parse('foo=bar&abc=xyz&abc=123');
console.log("parsed result: ", res01) ;


const res02 = stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
console.log("query string result: ", res02) ;


const res03 = escape('str1 str2');
console.log("URL percent-encoding result: ", res03) ; 


const res04 = unescape('str1%20str2');
console.log("URL percent-decoding result: ", res04) ;