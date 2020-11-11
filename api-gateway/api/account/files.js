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
        const queryParams = "?id="+req.user._id;
        var request = new apiGateway();
        request.sendRequest("ServiceFiles", "/api/files", req.method,true, req, res, next,queryParams);
    })
    .get('/getfile/:name',jwt.verifyUser, function (req, res, next) {
        req.body.imageUrl = req.params.name;
        var request = new apiGateway();
        request.sendRequest("ServiceFiles", "/api/files", req.method,false, req, res, next);
    });



module.exports = router;