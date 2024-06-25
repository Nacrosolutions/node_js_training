const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  const worker01 = new Worker(__dirname + '/myworker02.js');
  const worker02 = new Worker(__dirname + '/myworker03.js');
  // const worker02 = new Worker(__dirname +  '/c09c_fetch_worker.js');

  
  // receive messages from the worker thread
//   worker01.once('message', (message) => {
//     console.log('received from the worker01 thread: ', process.pid, message.status);
//   });

  worker02.once('message', (message) => {
    console.log('received from the worker01 thread: ', process.pid, message);
  });
  worker02.postMessage('https://jsonplaceholder.typicode.com/users');
}
  // send a ping message to the spawned worker thread 
