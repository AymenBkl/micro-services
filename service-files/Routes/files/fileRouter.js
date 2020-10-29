const express = require('express');


var router = express.Router();


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/", (req, res, next) => {
        res.send('this a test file add')
    })

    .get("/", (req, res, next) => {
        res.send('this a test file gett')
    })


module.exports = router;