const request = require('../Request/requestFile').request;

const updateCategory = require('./updateCategory');

const response = require('../Handler/HandlerPrescription/response.controller');

module.exports = {
    upadeteImage : (req,res,next) => {
        console.log("wow");
        request(req,res,next)
            .then(result => {
                if (result && result.status == 200){
                    response.response("success",res,"CATEGORY UPDATED",200,result.msg);
                }
                else {
                    response.response("error",res,result.msg,404,null);
                }
            })
            .catch(err => {
                console.log(err);
                response.response("error",res,err,500,null);
            })

    }
}