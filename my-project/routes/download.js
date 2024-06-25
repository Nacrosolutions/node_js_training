var express = require('express');
var router = express.Router();
let download_file_curl=require('../helpers/dowload-helper.js');

const baseUrl = "https://api.balarammullick.com/ProdImage/2d99cdd1-f906-4124-a4d0-b82b0b6a682b.jpg";

router.get('/',  function(req, res, next) {
    // res.render('index', { title: 'Express' });

     download_file_curl(baseUrl,function () {
        res.send({message:"File download completed ..."});

     })
    
  });



//   const links = [
//     "2d99cdd1-f906-4124-a4d0-b82b0b6a682b.jpg",
//     "bc8b83f3-f49a-4595-ac32-e75806d51c07.jpg",
//     "f42147fc-326d-44ac-a6c5-7482751aea2b.jpg",
//     "dce1f36e-2965-474b-a9aa-e3311f39306c.jpg",
//   ];
  
  
//   function moreImgs() {
//   links.map(link=>download_file_curl(`${baseUrl}/${link}`))
//    }
  
//    moreImgs(links)


module.exports = router;


