


const updateImage = require('./updateImage');

const updateUser = require('./updateUser');

const getUser = require('./getUser');

const searchPharmacies = require('./searchPharmacy');

const addFile = require('./addFile');

const address = require('./addAddress');


const addPaymentDetail = require('./addPaymentDetail');

const updatePaymentDetail = require('./updatePaymentDetail');

const getUsers = require('./getUsers');

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

    updatePaymentDetail : (req,res,next) => {
        console.log("here",req.params.paymentId);
        const query = {
            $set : req.body.paymentDetail
        }
        updatePaymentDetail.updatePaymentDetail(res,req.params.paymentId,query);
    },

    searchPharmarcies : (req,res,next) => {
        const query = {
            $set : req.body
        }
        searchPharmacies.searchPharmacy(req,res);
    },

    addFileExCel :  (req,res,next) => {
        console.log('here');
        const query = {
            $set : req.body
        }
        addFile.addFile(req,res,next);
    },

    addAddress :  (req,res,next) => {
        address.addAddress(res,req.query.id,req.body.address);
    },

    addPaymentDetail :  (req,res,next) => {
        addPaymentDetail.addPaymentDetail(res,req.query.id,req.body.paymentDetail);
    },

    getPatients:  (req,res,next) => {
        getUsers.getUsers(res,'patient');
    },


    getPharmacies:  (req,res,next) => {
        getUsers.getUsers(res,'pharmacy');
    },


    updateUserAdmin : (req,res,next) => {
        console.log(req.params.userId);
        const query = {
            $set : req.body.user
        }
        updateUser.updateUser(res,req.params.userId,query)
    }



}

