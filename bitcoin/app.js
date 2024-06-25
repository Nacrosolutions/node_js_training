const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');

const port = 3000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/mydb01', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
          .catch(err => console.log("Mongo conn. ERR: ", err));

const CoinRouter = require('./routes/coin-router');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/coins', CoinRouter);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));   // add this html in public folder.
});

app.listen(port, function(){
  console.log('Express @ coins: ', port);
});