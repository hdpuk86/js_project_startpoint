var express = require('express');
var router = new express.Router();


router.use('/planets', require('/planets'));


module.exports = router;
