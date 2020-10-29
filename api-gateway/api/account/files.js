/**
 * Created by domenicovacchiano on 10/07/16.
 */

var express = require('express'),
    router = express.Router(),
    apiGateway = require('../.././api-gateway');

const jwt = require('../../middlewares/jwt/jwt');

router.all('/',function (req, res, next) {
    next();
})
    .options('/',jwt.verifyUser, (req, res, next) => {
        next();
    })
    .post('/addfile',jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceFiles", "Routes/files.route", req.method,true, req, res, next);
    })
    .get('/getfile',jwt.verifyUser, function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceFiles", "Routes/files.route", req.method,false, req, res, next);
    });



module.exports = router;