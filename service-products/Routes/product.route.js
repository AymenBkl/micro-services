const express = require('express');

const app = express();


const productRouter = require('./product/productRouter');


app.use('/products',productRouter);



module.exports = app;