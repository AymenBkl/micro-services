const express = require('express');


var router = express.Router();



router.post("/",(req,res,next) => {
    res.send('this a test route');
})

router.get("/",(req,res,next) => {
    res.send('this a test route');
})


module.exports = router;