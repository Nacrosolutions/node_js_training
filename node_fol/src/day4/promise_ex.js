const events = require("events");
const myEmitter = new events.EventEmitter();


const getInfo = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['google', 'yahoo', 'ms'])
      }, 500)
    })
  }
 
  myEmitter.on('myevent',async()=>
  {
    const response = await getInfo();
    console.log(response);
 }
)
myEmitter.emit('myevent')