
const express = require('express');

const app = express();


const userLogin = require('./login/login');


app.use('/login',userLogin);



module.exports = app;