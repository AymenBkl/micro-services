const express = require('express');


var router = express.Router();


router.all("/", (req, res, next) => {
    next();
})
    .options("/", (req, res, next) => {
        next();
    })
    .post("/", (req, res, next) => {
        res.send('this a test route')
    })

    .get("/", (req, res, next) => {
        res.send('this a test route')
    })


module.exports = router;