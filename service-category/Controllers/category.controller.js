


const updateImage = require('./updateImage');

const updateUser = require('./updateUser');

const getUser = require('./getUser');

const addCategory = require('./addCategory');

module.exports = {
    addCategory : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addCategory.addCategory(res,req.body);
    },
    updateImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },

    updateUser : (req,res,next) => {
        const query = {
            $set : req.body
        }
        updateUser.updateUser(res,req.query.id,query);
    },


}

