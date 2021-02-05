
const response = require('../Handler/HandlerPrescription/response.controller');

const prescription = require('../Models/prescription');

module.exports.addPrescription = (res,body) =>{
    console.log("body",body);
    prescription.create(body)
        .then(prescription => {
            if (prescription){
                response.response("success",res,"PRESCRIPTION CREATED",200,prescription);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            console.log(err);
            response.response("error",res,err,500,null);
        })
}