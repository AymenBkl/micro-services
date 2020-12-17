const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.getAll = (res,mainProductId,pharmacyId) =>{
    product.find({
        $and : [{pharmacy : pharmacyId}, {mainProduct : mainProductId}]
    })
    .populate({path : 'mainProduct'})

        .then(products => {
            if (products && products.length != 0){
                console.log(products);
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