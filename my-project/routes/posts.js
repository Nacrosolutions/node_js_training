
var express = require('express');
var router = express.Router();


const url='https://jsonplaceholder.typicode.com/posts';



router.get('/posts',async(req,res,next)=>{
    const res1=await fetch(url);
    const result=await res1.json();

    res.send(result)
})


router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send({title: 'Express' });
  });




  



  

module.exports = router;
