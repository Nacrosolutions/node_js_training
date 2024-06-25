const express = require("express");   // npm install express
const http = require("http");
const app = express();


app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
  console.log("homepage...") ;
 
});

app.get("/user/:who", function(req, res) {
  res.end("User " + req.params.who + ": welcome back to the system.");
  console.log("/user/:who");
  console.log(req.route);

});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
   console.log("/about...") ;
});

app.get("*", function(request, response) {
  response.end("404! File Missing");
  console.log("404") ;
});

http.createServer(app).listen(3000);
console.log("listening  on 3000...") ;