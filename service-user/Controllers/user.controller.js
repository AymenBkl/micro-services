


const updateImage = require('./updateImage');

const updateUser = require('./updateUser');

const getUser = require('./getUser');

const searchPharmacies = require('./searchPharmacy');

const circuitBreaker = require('../CircuitBreaker/circuitBreaker')
module.exports = {
    getUser : (req,res,next) => {
        circuitBreaker.handleBreak(getUser.getUser(res,req.body.id,null));
        
    },
    updateImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },

    updateUser : (req,res,next) => {
        const query = {
            $set : req.body
        }
        circuitBreaker.handleBreak(updateUser.updateUser(res,req.query.id,query));

    },

    searchPharmarcies : (req,res,next) => {
        const query = {
            $set : req.body
        }
        searchPharmacies.searchPharmacy(req,res);
    },


}

