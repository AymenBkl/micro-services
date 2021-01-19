


const updateImage = require('./updateImage');

const updateCategory = require('./updateCategory');

const getUser = require('./getUser');

const addCategory = require('./addCategory');

const gettAllCategory = require('./getAllCategory');

const deleteCategory = require('./deleteCategory');

const searchCategory = require('./searchCategory');

const getCategory = require('./getCategory');


module.exports = {
    addCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addCategory.addCategory(res,req.body);
    },
    getAllCategory : (req,res,next) => {
        gettAllCategory.getAll(res);
    },

    getCategory : (req,res,next) => {
        console.log("id",req.params.categoryId);
        getCategory.getCategory(res,req.params.categoryId);
    },

    updateCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        const query = {
            $set : req.body
        }
        const option = {new : true};
        updateCategory.updateCategory(res,req.body.metadata.id,query,option);
    },

    appendProducts : (req,res,next) => {
        const query = {
             $addToSet: { products: req.body.products } ,
             
        }
        const option = {upsert : true};
        updateCategory.updateCategory(res,req.body.metadata.id,query,option);
    },

    

    deleteCategory : (req,res,next) => {
        deleteCategory.addCategory(res,req.body.metadata.id);
    },
    removeProduct : (req,res,next) => {
        const query = {
            $pull: { products: req.body.metadata.productId } 
        }
        const option = {upsert : true};
        updateCategory.updateCategory(res,req.body.metadata.categoryId,query,option);
    },
    addImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },
    searchCategory : (req,res,next) => {
        searchCategory.searchCategory(req,res);
    },


}

