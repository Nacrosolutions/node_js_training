const { parentPort } = require('worker_threads');


  // when a ping message is received, send a pong message back.
  parentPort.once('message', (msg) => {
    console.log('w01: Received from the parent thread: ', process.pid, msg);
    parentPort.postMessage({status: 'pong'});
  });


