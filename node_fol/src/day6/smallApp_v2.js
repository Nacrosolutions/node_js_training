
const express = require('express') ;
const app = express();
const bodyParser = require('body-parser');
const EventEmitter = require('events');


// app.use(express.json()) ;
// app.use(express.urlencoded({ extended: false }));

// data for posting: { "userId": 2,  "title": "test", "body": "test msg"}
const url = 'https://jsonplaceholder.typicode.com/posts';

app.use(bodyParser.json())


// app.use(express.urlencoded({ extended: false }));

app.use(logger)

app.get('/', function (req, res) {
  res.send({status: 'Welcome to Express...'});

}) ;


app.get("/pulsar/:duration/:repeat",  (req, res) => {
    console.log(req.body)
   
    const pulsar = new Pulsar(req.params.duration, req.params.repeat);
    let sendData=[];

     pulsar.on('pulse', function () { 
        sendData.push({memory:process.memoryUsage()})
    });
    // res.send({memory:process.memoryUsage()});
    setTimeout(()=>{    res.send(sendData)
},8001)
  })

app.post("/", async (req, res) => {
  console.log(req.body)
  postData(req.body, res);
})



const server = app.listen(3000, function () {
  const port = server.address().port ;
  console.log('Express: listening at port: %s', port);
});



async function postData (data,res){

const resss=await fetch(url,{
    method:'POST',
    body:JSON.stringify(data)
})
const result=await resss.json();


res.send(result)
}



function Pulsar(interval, repeat) {
    var events = new EventEmitter;
    var emits = 0;
    var timer = setInterval(function () {
        events.emit('pulse');
        emits++;
        if (emits === repeat) {
            clearInterval(timer);
        }
    }, interval);
    return events;
}



function logger(req, res, next) {
  console.log("Req info: %s %s", req.method, req.url);
  next();
}