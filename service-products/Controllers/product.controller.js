


const updateImage = require('./updateImage');

const updateProduct = require('./updateProduct');

const allProducts = require('./allProducts');

const addProduct = require('./addProduct');

const gettAllProduct = require('./getAllProduct');

const deleteProduct = require('./deleteProduct');

const searchProduct = require('./searchProduct');

const mainMainProduct = require('./addMainProduct');

const getAllMainProduct = require('./getAllMainProduct');

const findProduct = require('./findProduct');

module.exports = {
    addProduct : (req,res,next) => {
        req.body.mainProduct = req.body.metadata.mainproductId;
        addProduct.addProduct(res,req.body);
    },

    addMainProduct : (req,res,next) => {
        mainMainProduct.addProduct(res,req.body);
    },
    getAllProduct : (req,res,next) => {
        gettAllProduct.getAll(res,req.body.metadata.mainproductId,req.body.metadata.pharmacyId);
    },

    getAllMainProduct : (req,res,next) => {
        getAllMainProduct.getAll(res);
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
    },
    findProduct : (req,res,next) =>{
        findProduct.findProduct(req,res);
    }


}

