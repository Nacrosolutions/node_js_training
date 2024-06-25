const http = require("http");
const url = require("url");


const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url).pathname
  
    if (req.method == "GET") {
        if (reqUrl == "/") {
            res.write("Home Page")
            res.end()
        }
    } else if (req.method == "POST") {   // post req
        if (reqUrl == "/status") {
            res.write("Server is up")
            res.end()
        }
    }
})


server.listen(3000, () => console.log("server, at 3000"));