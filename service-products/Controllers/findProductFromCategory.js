const product = require('../Models/product');

const mainProduct = require('../Models/main-product');

const response = require('../Handler/HandlerProduct/response.controller');
const category = require('../Models/category');


module.exports.findProduct = (req, res) => {
    addRegex(req.body.products.products);
    console.log(req.body.products.products);
    console.log(req.body.categorieId);
    category.findById(req.body.categorieId)
        .populate({
            path: 'products', match: req.body.products.products
        })
        .then(categorie => {
            console.log(categorie)
            if (categorie && categorie.products && categorie.products.length != 0) {

                response.response("success", res, "Products Found", 200, categorie.products);

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


