


const updateImage = require('./updateImage');

const updateUser = require('./updateUser');

const getUser = require('./getUser');

const searchPharmacies = require('./searchPharmacy');

module.exports = {
    getUser : (req,res,next) => {
        getUser.getUser(res,req.body.id,null);
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

    searchPharmarcies : (req,res,next) => {
        const query = {
            $set : req.body
        }
        searchPharmacies.searchPharmacy(req,res);
    },


}

