const product = require('../Models/product');

const response = require('../Handler/HandlerProduct/response.controller');

module.exports.addProduct = (res, body,pharmacy) => {
    console.log(pharmacy)
        var query = {mainProduct:body.mainProduct,pharmacy: pharmacy},
         update = { status: 'active',price: body.price,description:body.description},
         options = { upsert: true, new: true, setDefaultsOnInsert: true };
         console.log(query);
         console.log(options);
         console.log(update);
    product.findOneAndUpdate(query,update,options)
        .then(product => {
            if (product) {
                response.response("success", res, "Product CREATED", 200, product);
            }
            else {
                response.response("error", res, "undefined", 404, null);
            }
        })
        .catch(err => {
            response.response("error", res, err, 500, null);
        })
}