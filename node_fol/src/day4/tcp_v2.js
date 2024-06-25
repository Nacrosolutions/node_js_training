console.log("starting server: 8000 ...\n") ;
// ------------------------
const net = require("net");
const server = net.createServer(function(socket) {

//socket.end("Goodbye!\n");
socket.write("Goodbye!\n");
});
server.listen(8000);

server.on("error", function(error) {
	if (error.code === "EADDRINUSE") {
		console.error("Port is already in use");
	}
});


server.on("data", function(data) {
    console.log( "server data: ",  data);
});

server.on('connect', function(connect) {
      console.log('connection established');

  });  