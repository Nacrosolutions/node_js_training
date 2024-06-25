const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  console.log('Inside Main Thread:', process.pid);
  
  // load the file inside a Worker instance.
  let t1 = new Worker(__dirname + '/myworker.js');
  console.log("main: ", isMainThread);

} else {
  console.log("nothing to do....") ;
}
