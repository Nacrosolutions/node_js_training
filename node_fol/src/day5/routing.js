const  http = require('http');



http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header

 const  url = req.url;

 if(url ==='/about'){
    res.write('<h1>about us page<h1>'); 
    res.end(); 
 }else if(url ==='/contact'){
    res.write('<h1>contact page<h1>');
    res.end(); 
 }else{
    res.write('<h1>Server is up.<h1>'); 
    res.end(); 
 }
}).listen(3000, function(){
 console.log("server, at port 3000"); 
});