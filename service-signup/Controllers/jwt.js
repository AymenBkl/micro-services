/**
 * Created by domenicovacchiano on 07/07/16.
 */

var express = require('express'),
    router = express.Router(),
    debug = require('debug')('http'),
    config= require ('../config')()


router.get('/', function (req, res,next) {
    return res.status(200).send("## JWT -> This is just a test response ;-)");
});

module.exports = router;