var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client/build'));

//uncomment below for using mongo. Change database names:

// // MongoClient.connect('mongodb://localhost:27017/database_name_here', function(err, client){
//   if(err){
//     return console.log(err);
//   }
//   // db = client.db('database_name_here');
//   console.log('Connected to DB');
//
//   app.listen(3000, function() {
//     console.log('App running on port ' + this.address().port);
//   });
// });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});


// delete below if using mongo:
app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
});
