/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');

router.options('/',(req,res,next) => {
    next();
});

router.all('/',function (req, res,next) {
    console.log('all');
    next();
})
.post('/',function (req, res,next) {
    console.log('post');
    var request = new apiGateway();
    request.sendRequest("ServiceUser","Routes/user.route",req.method,req, res,next);
})
.get('/route',function (req, res,next) {
    console.log('get');
    var request = new apiGateway();
    request.sendRequest("ServiceUser","Routes/user.route",req.method,req, res,next);
});





module.exports = router;