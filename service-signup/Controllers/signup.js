/**
 * Created by domenicovacchiano on 07/07/16.
 */

var express = require('express'),
    router = express.Router(),
    debug = require('debug')('http'),
    config= require ('../config')();


const userController = require('./controller/user/user.controller');

router.post('/',userController.signUp);

module.exports = router;