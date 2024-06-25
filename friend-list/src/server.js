const express = require('express');
const logger = require('morgan') ;
const app = express();

const friendsList = require('./memory-list') ;

const port = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(logger('tiny')) ;

app.get('/', (req, res) => {
   res.render('index', {personList: friendsList.getAll()});
//    res.send( {personList: friendsList.getAll()});
});

app.post('/submit', (req, res) => {
   friendsList.add(req.body.friendName);
   res.render('person-added', { personName: req.body.friendName, personList: friendsList.getAll() });
});



app.get('/', (req, res) => {
   res.status(200).send('Using Express');
});

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});
