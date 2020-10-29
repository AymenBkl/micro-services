
const express = require('express');

const app = express();


const userSignup = require('./signup/userSignup');


app.use('/signup',userSignup);



module.exports = app;