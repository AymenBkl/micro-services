const express = require('express');

const router = express.Router();


router.get("/testRouter",(req,res,next) => {
    res.send('this a test route');
} )