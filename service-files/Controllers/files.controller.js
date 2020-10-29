const uploadImage = require('./addfile');

module.exports = {
    uploadImage : (req,res,next) => {
        uploadImage.upload(req,res,next);
    }

}

