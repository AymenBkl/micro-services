const request = require('../Request/requestFile').request;

const updateCategory = require('./updatePrescription');

const response = require('../Handler/HandlerPrescription/response.controller');

module.exports = {
    upadeteImage : (req,res,next) => {
        request(req,res,next)
            .then(result => {
                console.log(result)
                if (result && result.status == 200){
                    response.response("success",res,"Prescription UPDATED",200,result.msg);
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