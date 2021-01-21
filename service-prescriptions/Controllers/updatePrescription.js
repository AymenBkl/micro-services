const category = require('../Models/category');

const response = require('../Handler/HandlerPrescription/response.controller');

const prescription = require('../Models/prescription');

module.exports.updatePrescription = (res,id,query,options) =>{
    console.log(id);

    prescription.findByIdAndUpdate(id,query,options)
        .then(prescription => {
            if (prescription){
                response.response("success",res,"PRESCRIPTION UPDATED",200,prescription);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);

        })
}