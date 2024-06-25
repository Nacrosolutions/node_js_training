const net = require("net");
const  server = net.createServer(function(socket) {
      console.log("Starting TCP server, at 8000");
      // handle connection

});

server.listen(8000);