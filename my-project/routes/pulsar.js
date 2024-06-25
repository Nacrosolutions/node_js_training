var express = require('express');
const Pulsar = require('../helpers/pulsar');
var router = express.Router();




router.get("/:duration/:repeat",  (req, res) => {
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




module.exports = router;
