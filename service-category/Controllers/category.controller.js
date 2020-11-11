


const updateImage = require('./updateImage');

const updateCategory = require('./updateCategory');

const getUser = require('./getUser');

const addCategory = require('./addCategory');

const gettAllCategory = require('./getAllCategory');

const deleteCategory = require('./deleteCategory');

const searchCategory = require('./searchCategory');

const circuitBreaker = require('../CircuitBreaker/circuitBreaker');

module.exports = {
    addCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        circuitBreaker.handleBreak(addCategory.addCategory(res,req.body));
    },
    getAllCategory : (req,res,next) => {
        circuitBreaker.handleBreak(gettAllCategory.getAll(res,req.query.id));
    },

    updateCategory : (req,res,next) => {

        req.body.pharmacy = req.query.id;
        const query = {
            $set : req.body
        }
        circuitBreaker.handleBreak(updateCategory.updateCategory(res,req.body.metadata.id,query));

    },

    deleteCategory : (req,res,next) => {
        circuitBreaker.handleBreak(deleteCategory.addCategory(res,req.body.metadata.id));
    },
    addImage : (req,res,next) => {
        circuitBreaker.handleBreak(updateImage.upadeteImage(req,res,next));
    },
    searchCategory : (req,res,next) => {
        circuitBreaker.handleBreak(searchCategory.searchCategory(req,res));
    },


}

