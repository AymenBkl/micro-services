/**
 * Created by domenicovacchiano on 07/07/16.
 */

var express = require('express'),
    router = express.Router(),
    debug = require('debug')('http'),
    config= require ('../config')()

const userController = require('./UserController/user.controller');
router.post('/',userController.login);

module.exports = router;