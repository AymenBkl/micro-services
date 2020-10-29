/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');


router.all('/', function (req, res, next) {
    next();
})
    .options('/', (req, res, next) => {
        next();
    })
    .post('/image', function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method,true, req, res, next);
    })
    .get('/user', function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method,false, req, res, next);
    })
    .put('/updateuser', function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceUser", "Routes/user.route", req.method,false, req, res, next);
    });





module.exports = router;