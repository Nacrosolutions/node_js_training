const  http = require('http');
const fs=require('fs')

let  info;
fs.readFile("./index.html", "utf8", function (err, data) {
    if (err) {
      throw err;
    }
    info=data;
  });
let  server = http.createServer( async function(request, response) {
    response.write(info);
    response.end();
});
server.listen(3000);
console.log("http on 3000") ;
