/**
 * Created by domenicovacchiano on 10/07/16.
 */

var debug = require('debug')('http'),
    config= require ('./config')(),
    request = require('request'),
    servicesHelper = require('./services-helper')(config.services),
    serviceRegistry = require ('../micro-node-service-registry-lib')({
        name:config.serviceRegistry.database.name,
        user:config.serviceRegistry.database.user,
        password:config.serviceRegistry.database.password,
        host:config.serviceRegistry.database.host,
        port:config.serviceRegistry.database.port,
        connectionPool:config.serviceRegistry.database.connectionPool
    });

var ApiGateway = function () {
    
};


ApiGateway.prototype.sendRequest=function (serviceName,serviceEndpointId,method,file,req, res,next,query,extra = '') {
    
    service=servicesHelper.getService(serviceName,serviceEndpointId);
    console.log(serviceName,serviceEndpointId);
    serviceRegistry.find(service.name,service.endpointId,function (error,service) {
        if (service && !error){
            console.log(service.endpointUrl);
            if (file == true){
                request({
                    url: req.user  ? service.endpointUrl + extra + query : service.endpointUrl + extra,
                    method: method,
                    body: req ,
                }, function(error, response, body){
                    if (error){
                        return next(error)
                    }else {
                        debug(body);
                        return res.status(response.statusCode).send(JSON.parse(body));
                    }
                });
            }
            else {
                console.log(extra);
                request({
                    url: req.user ? service.endpointUrl + extra + "?id=" + req.user._id : service.endpointUrl + extra,
                    method: method,
                    json : req.body ,
                }, function(error, response, body){
                    if (error){
                        return next(error)
                    }else {
                        debug(body);
                        return res.status(response.statusCode).send(body);
                    }
                });
            }
        } else {
            console.log(error);
            if (error){
                return next(error);
            }else {
                return res.status(500).send(1001,"Service not found","Application Error");
            }

        }
    });
};

module.exports=ApiGateway;