const product = require('../Models/product');

const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../../service-category/Models/category');


module.exports.findProduct = (req, res) => {
    addRegex(req.body.products);
    mainProduct.find(req.body.products)
        .then(products => {
            if (products && products.length != 0) {

                response.response("success", res, "Products Found", 200, products);

            }
            else {
                response.response("error", res, "undefined", 404, null);
            }
        })
        .catch(err => {
            console.log(err);
            response.response("error", res, err, 500, null);
        })


}


function addRegex(product) {
    product.name = new RegExp(product.name.toUpperCase());
}


