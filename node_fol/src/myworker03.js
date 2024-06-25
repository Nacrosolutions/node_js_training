const { parentPort } = require('worker_threads');


  // when a ping message is received, send a pong message back.
  parentPort.once('message', async (msg) => {
    console.log('w01: Received from the parent thread: ', process.pid, msg);
 const data=await fetch(msg);
 const dt=await data.json();

    parentPort.postMessage(dt);
  });


