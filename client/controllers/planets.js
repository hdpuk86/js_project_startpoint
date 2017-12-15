var express = require('express');
var router = new express.Router();

var planetsRouter = new express.Router();

planetsRouter.get('/', function(req, res){
  db.collection('planets').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

module.exports = planetsRouter;
