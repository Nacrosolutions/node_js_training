const express = require('express');
const app = express();
const CoinRouter = express.Router();
const Coin = require('../models/coin-model');

CoinRouter.route('/').get(function (req, res, next) {  // show all.
   Coin.find(function (err, coins){
      if(err){
        console.log(err);
      }
      else {
        // res.render('index', {coins: coins});
        res.send({coins: coins})
      }
    });
});


CoinRouter.route('/create').get(function (req, res, next) {
   res.render('create');
 });


CoinRouter.route('/post').post(function (req, res, next) {
   const coin = new Coin(req.body);
   console.log(coin);
   coin.save()
     .then(data => {
         console.log("coin data, after saving: ", data);
         res.redirect('/coins');
     })
     .catch(err => {
         res.status(400).send("unable to save to database");
     });
 });


 module.exports = CoinRouter;