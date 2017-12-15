var express = require('express');
var path = require('path');
var router = new express.Router();



router.use('/bucketlist', require('./bucketlist'));




module.exports = router;
