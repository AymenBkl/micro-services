const express = require('express');

const app = express();


const categoryRouter = require('./category/categoryRouter');


app.use('/category',categoryRouter);



module.exports = app;