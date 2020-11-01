const express = require('express');

const app = express();



const productFilesRouter = require('./product/productFilesRouter');


app.use('/files',productFilesRouter);


module.exports = app;