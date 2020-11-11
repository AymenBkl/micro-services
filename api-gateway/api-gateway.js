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
    const baseUrl = "http://aymenbkl:8050/" + serviceName.toLowerCase() + serviceEndpointId;
        if (file == true){
            request({
                url: req.user  ? baseUrl  + extra + query : baseUrl+ extra,
                method: method,
                body: req ,
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": "Bearer " + req.headers.authorization != null ?  req.headers.authorization.split(' ')[1] : ''
            },
                
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
            let params = 
            { 
                url: req.user ? baseUrl + extra + "?id=" + req.user._id : baseUrl + extra,
                method: method,
                json : req.body }
                if (req.headers.authorization != null){
                    console.log('lol');
                    params.headers = {
                        "Content-Type":"application/json",
                        "Authorization": "Bearer " + req.headers.authorization != null ?  req.headers.authorization.split(' ')[1] : ''
                    }
                }
                
            request(params, function(error, response, body){
                if (error){
                    return next(error)
                }else {
                    debug(body);
                    return res.status(response.statusCode).send(body);
                }
            });
        }
    

    
};

module.exports=ApiGateway;