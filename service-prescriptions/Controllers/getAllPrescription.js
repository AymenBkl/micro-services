
const response = require('../Handler/HandlerPrescription/response.controller');

const prescription = require('../Models/prescription');


module.exports.getAllPrescriptions = (res,req) =>{
    console.log(req.query.id);
    prescription.find({patient: req.query.id})
        .then(prescriptions => {
            if (prescriptions){
                response.response("success",res,"CATEGORY CREATED",200,prescriptions);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}