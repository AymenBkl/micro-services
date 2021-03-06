
const response = require('../Handler/HandlerPrescription/response.controller');

const prescription = require('../Models/prescription');

const comment = require('../Models/commet');

const product = require('../Models/product');

const mainProduct = require('../Models/main-product');

const user = require('../Models/user');

module.exports.getAllPrescriptions = (res,query) =>{
    prescription.find(query)
    .populate({path:"comments",populate:{path:'products pharmacy',populate:{path:'product',populate:{path:'mainProduct'},select: "-salt -hash"}}})
    .populate({path:"patient",select: "-salt -hash"})
        .then(prescriptions => {
            if (prescriptions){
                response.response("success",res,"CATEGORY CREATED",200,prescriptions);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            console.log(err)
            response.response("error",res,err,500,null);
        })
}