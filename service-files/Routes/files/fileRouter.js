const express = require('express');


var router = express.Router();

const upload = require('../../Middlewares/multer').upload;

const filesController = require('../../Controllers/files.controller');

router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/",upload.single('file'),filesController.uploadImage)

    .post("/uploadmultiple",upload.array('file',7),filesController.uploadImages)

    .get("/",filesController.getImage);


module.exports = router;