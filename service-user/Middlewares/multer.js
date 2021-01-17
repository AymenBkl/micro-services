const multer = require('multer');

var uuid = require('uuid');

var storage = multer.diskStorage(
    {
        destination: '../service-user/uploads/',
        filename: function ( req, file, cb ) {
            cb( null, uuid.v4() + file.originalname );
        }, 
    }
);
module.exports.upload = multer( { storage: storage } );
