/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');

const jwt = require('../../middlewares/jwt/jwt');

router.options('/',(req,res,next) => {
    next();
});

router.post('/', function (req, res,next) {
    var request = new apiGateway();
    request.sendRequest("ServiceLogin","login",req, res,next);
});



module.exports = router;