


const updateImage = require('./updateImage');

const updateProduct = require('./updateProduct');

const allProducts = require('./allProducts');

const addProduct = require('./addProduct');

const gettAllProduct = require('./getAllProduct');

const deleteProduct = require('./deleteProduct');

const searchProduct = require('./searchProduct');
module.exports = {
    addProduct : (req,res,next) => {
        req.body.category = req.body.metadata.categoryId;
        addProduct.addProduct(res,req.body);
    },
    getAllProduct : (req,res,next) => {
        gettAllProduct.getAll(res,req.body.metadata.categoryId);
    },

    allProduct : (req,res,next) => {
        allProducts.getAll(req,res)
    },

    updateProduct : (req,res,next) => {
        const query = {
            $set : req.body
        }
        console.log(req.body);
        updateProduct.updateProduct(res,req.body.metadata.productId,query);
    },

    deleteProduct : (req,res,next) => {
        deleteProduct.deleteProduct(res,req.body.metadata.productId);
    },

    addImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },

    searchProduct : (req,res,next) =>{
        searchProduct.searchProduct(req,res);
    }


}

