/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    jwt = require('../../middlewares/jwt/jwt');
    apiGateway = require('../.././api-gateway');

router.all('/', function (req, res, next) {
    next();
})
    .options('/',jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/addmessage',jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceMessages", "Routes/messages.route", req.method,false, req, res, next);
    })

    .get('/getmessages',jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceMessages", "Routes/messages.route", req.method,false, req, res, next);
    })



module.exports = router;