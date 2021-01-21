


const updateImage = require('./updateImage');

const updatePrescription = require('./updatePrescription');

const addPrescription = require('./addPrescription');

const gettAllPrescriptions = require('./getAllPrescription');

const addComment = require('./addComment');

const getCategory = require('./getCategory');


module.exports = {
    addPrescription : (req,res,next) => {
        addPrescription.addPrescription(res,req.body);
    },
    gettAllPrescriptionsPatient : (req,res,next) => {
        const query = 
        {
            patient: req.query.id
        }
        gettAllPrescriptions.getAllPrescriptions(res,query);
    },

    gettAllPrescriptionsPharmacy: (req,res,next) => {
        gettAllPrescriptions.getAllPrescriptions(res,{});
    },

    getCategory : (req,res,next) => {
        console.log("id",req.params.categoryId);
        getCategory.getCategory(res,req.params.categoryId);
    },

    updatePrescription : (req,res,next) => {
        const query = {
            $set : req.body
        }
        const option = {new : true};
        updatePrescription.updatePrescription(res,req.body.metadata.id,query,option);
    },

    addComment : (req,res,next) => {
        req.body.pharmacy = req.query.id;
        addComment.addComment(res,req.body)
    },

    addImage : (req,res,next) => {
        updateImage.upadeteImage(req,res,next);
    },

}

