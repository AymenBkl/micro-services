

const getReferal = require('./getReferal');

const createReferal = require('./createReferal');

const getAllReferal = require('./getAllReferal');

const createOrder = require('./createOrder');

const getAllOrders = require('./getAllOrder');

const updateOrder = require('./updateOrder');

const updateReferal = require('./updateReferal');

const createRefund = require('./createRefund');

const getAllRefund = require('./getAllRefund');

const createCommission = require('./createComission');

const updatecommission = require('./updateComission');

const getCommission = require('./getCommission');

const updateRefund = require('./updateRefund');

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

    getAllOrder: (req,res,next) => {
        query = {$or : [{patient : req.query.id},{pharmacy:req.query.id}]};
        getAllOrders.getOrders(req,res,query);
    }, 

    getAllRefunds: (req,res,next) => {
        query = {$or : [{patient : req.query.id},{pharmacy:req.query.id}]};
        getAllRefund.getRefunds(req,res,query);
    }, 
    getAllRefundsAdmin: (req,res,next) => {
        query = {};
        getAllRefund.getRefunds(req,res,query);
    }, 

    updateOrderStatus: (req,res,next) => {
        const query = {
            $set : req.body
        }

        updateOrder.updateOrder(res,req.body.metadata.orderId,query);
    },

    getAllOrders : (req,res,next) => {
        query = {};
        getAllOrders.getOrders(req,res,query);
    }, 

    getAllUserOrders : (req,res,next) => {
        console.log(req.params.userId);
        query = {$or : [{patient : req.params.userId},{pharmacy:req.params.userId}]};
        getAllOrders.getOrders(req,res,query);
    }, 

    updateReferal : (req,res,next) => {
        const query = {
            $set : req.body
        }
        updateReferal.updateReferal(res,req.body.metadata.referalId,query);
    }, 
    
    
    createRefund : (req,res,next) => {
        createRefund.createRefund(req,res,next);
    }, 

    updateRefund : (req,res,next) => {
        updateRefund.updateRefund(req,res,next);
    }, 

    payPharmacy : (req,res,next) => {
        const query = {
            payedByAdmin : 'PAID'
        }

        updateOrder.updateOrder(res,req.body.metadata.orderId,query);
    }, 

    payReferal : (req,res,next) => {
        const query = {
            referal: {referal:req.body.referalId ,payedByAdmin : 'PAID',commissionApplied:req.body.commission}
        }

        updateOrder.updateOrder(res,req.body.metadata.orderId,query);
    },
    payRefund : (req,res,next) => {
        const query = {
            refund: {refund:req.body.refundId,payedByAdmin : 'PAID',commissionApplied:req.body.commission}
        }

        updateOrder.updateOrder(res,req.body.metadata.orderId,query);
    },

    pickUp : (req,res,next) => {
        console.log(req.body.refundId)
        const query = {
            refund: {refund:req.body.refundId,payedByAdmin : 'PICKUP',commissionApplied:req.body.commission}
        }

        updateOrder.updateOrder(res,req.body.metadata.orderId,query);
    },

    getCommissions : (req,res,next) => {
        getCommission.getCommission(res);
    },

    /**createCommission: (data) => {
        createCommission.createCommission(data);
    },**/

    updateCommission: (req,res,next) => {
        const query = {
            commission: req.body.commission
        }
        console.log("here");
        updatecommission.updateCommission(res,req.body.metadata.commisionId,query);
    }

}

