console.log("process.arch: ", process.arch) ;
console.log("process.mem: ", process.memoryUsage()) ;
console.log("pid: ", process.pid) ;


function memUsage(){
  console.log("process.mem: ", process.memoryUsage()) ;
}

const timer = setInterval(memUsage, 1001);

setTimeout(() => {
  clearInterval(timer);
}, 5000);
