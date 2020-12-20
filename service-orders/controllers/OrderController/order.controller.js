

const getReferal = require('./getReferal');

const createReferal = require('./createReferal');

const getAllReferal = require('./getAllReferal');

const createOrder = require('./createOrder');

module.exports = {
    createReferal : (req,res,next) => {
        createReferal.createReferal(req,res,next);
    },

    getReferal : (req,res,next) => {
        query = {$or : [{owner : req.query.id},{code:req.body.code}]};
        getReferal.getReferal(req,res,query);
    },

    getAllReferal : (req,res,next) => {
        getAllReferal.getReferal(req,res,next);
    },

    createORder : (req,res,next) => {
        createOrder.createOrder(req,res,next);
    },

    checkReferal : (req,res,next) => {
        query = {code : req.body.code};
        getReferal.getReferal(req,res,query);
    }, 

}

