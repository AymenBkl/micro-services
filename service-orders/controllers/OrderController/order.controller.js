

const getReferal = require('./getReferal');

const createReferal = require('./createReferal');

const getAllReferal = require('./getAllReferal');

module.exports = {
    createReferal : (req,res,next) => {
        createReferal.createReferal(req,res,next);
    },

    getReferal : (req,res,next) => {
        getReferal.getReferal(req,res,next);
    },

    getAllReferal : (req,res,next) => {
        getAllReferal.getReferal(req,res,next);
    },

}

