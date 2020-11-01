


const updateImage = require('./updateImage');

const updateCategory = require('./updateCategory');

const getUser = require('./getUser');

const addCategory = require('./addCategory');

const gettAllCategory = require('./getAllCategory');

const deleteCategory = require('./deleteCategory');
module.exports = {
    addCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addCategory.addCategory(res,req.body);
    },
    getAllCategory : (req,res,next) => {
        gettAllCategory.getAll(res,req.query.id);
    },

    updateCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        const query = {
            $set : req.body
        }
        console.log(req.body);
        updateCategory.updateCategory(res,req.body.metadata.id,query);
    },

    deleteCategory : (req,res,next) => {
        deleteCategory.addCategory(res,req.body.metadata.id);
    },
    addImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    }


}

