


const updateImage = require('./updateImage');

const updateUser = require('./updateUser');

const getUser = require('./getUser');

const addCategory = require('./addCategory');

const gettAllCategory = require('./getAllCategory');
module.exports = {
    addCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addCategory.addCategory(res,req.body);
    },
    getAllCategory : (req,res,next) => {
        gettAllCategory.getAll(res,req.query.id);
    },

    updateUser : (req,res,next) => {
        const query = {
            $set : req.body
        }
        updateUser.updateUser(res,req.query.id,query);
    },


}

