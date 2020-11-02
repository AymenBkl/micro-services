const express = require('express');

const app = express();



const productManagements= require('./product/productManagements');


app.use('/management',productManagements);


module.exports = app;