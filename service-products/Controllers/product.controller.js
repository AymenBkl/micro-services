


const updateImage = require('./updateImage');

const updateProduct = require('./updateProduct');

const getUser = require('./getUser');

const addProduct = require('./addProduct');

const gettAllProduct = require('./getAllProduct');

const deleteProduct = require('./deleteProduct');
module.exports = {
    addProduct : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addProduct.addProduct(res,req.body);
    },
    getAllProduct : (req,res,next) => {
        gettAllProduct.getAll(res,req.query.id);
    },

    updateProduct : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        const query = {
            $set : req.body
        }
        console.log(req.body);
        updateProduct.updateProduct(res,req.body.metadata.id,query);
    },

    deleteProduct : (req,res,next) => {
        deleteProduct.addProduct(res,req.body.metadata.id);
    },
    
    addImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    }


}

