/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../../api-gateway');

router.options('/',(req,res,next) => {
    next();
});

router.get('/', function (req, res,next) {
    console.log('get')
    var request = new apiGateway();
    request.sendRequest("ServiceFiles","getfile",req, res,next);
});



module.exports = router;