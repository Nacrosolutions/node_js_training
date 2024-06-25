const { isMainThread } = require('worker_threads');


console.log("worker file activated.") ;
console.log('Inside Worker Thread:' , process.pid);
console.log("worker: ", isMainThread); 