


const updateImage = require('./updateImage');

const updateCategory = require('./updateCategory');

const getUser = require('./getUser');

const addCategory = require('./addCategory');

const gettAllCategory = require('./getAllCategory');

const deleteCategory = require('./deleteCategory');

const searchCategory = require('./searchCategory');

module.exports = {
    addCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addCategory.addCategory(res,req.body);
    },
    getAllCategory : (req,res,next) => {
        gettAllCategory.getAll(res);
    },

    updateCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        const query = {
            $set : req.body
        }
        console.log(req.body);
        updateCategory.updateCategory(res,req.body.metadata.id,query);
    },

    appendProducts : (req,res,next) => {
        const query = {
             $push: { products: req.body.products } 
        }
        updateCategory.updateCategory(res,req.body.metadata.id,query);
    },

    deleteCategory : (req,res,next) => {
        deleteCategory.addCategory(res,req.body.metadata.id);
    },
    addImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },
    searchCategory : (req,res,next) => {
        searchCategory.searchCategory(req,res);
    },


}

