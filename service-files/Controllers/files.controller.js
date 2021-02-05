const uploadImage = require('./addfile');

const getFile = require('./getfile');

const uploadImages = require('./addFiles');
module.exports = {
    uploadImage : (req,res,next) => {
        uploadImage.upload(req,res,next);
    },

    uploadImages : (req,res,next) => {
        uploadImages.upload(req,res,next);
    },

    getImage : (req,res,next) => {
        getFile.getImage(req,res);
    }

}

