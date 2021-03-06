const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.getAll = (req,res) =>{
    product.find({
        pharmacy : req.body.pharmacyId,
        status: 'active'
    })
    .populate({path : 'mainProduct',match: {status:'active'}})
        .then(products => {
            if (products && products.length != 0){
                response.response("success",res,"Products Found",200,products);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}