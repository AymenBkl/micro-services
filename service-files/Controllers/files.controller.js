const uploadImage = require('./addfile');

const getFile = require('./getfile');
module.exports = {
    uploadImage : (req,res,next) => {
        uploadImage.upload(req,res,next);
    },

    getImage : (req,res,next) => {
        getFile.getImage(req,res);
    }

}

