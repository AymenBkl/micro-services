/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');

router.options('/',(req,res,next) => {
    next();
});

router.post('/', function (req, res,next) {
    var request = new apiGateway();
    request.sendRequest("ServiceSignup","Controllers/signup",req, res,next);
});



module.exports = router;