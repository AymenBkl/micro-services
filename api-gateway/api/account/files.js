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
    .post('/addfile', function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceFiles", "Routes/files.route", req.method, req, res, next);
    })
    .get('/getfile', function (req, res, next) {
        var request = new apiGateway();
        request.sendRequest("ServiceFiles", "Routes/files.route", req.method, req, res, next);
    });



module.exports = router;