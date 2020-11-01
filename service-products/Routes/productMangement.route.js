const express = require('express');

const app = express();


const categoryRouter = require('./category/categoryRouter');

const categoryFilesRouter = require('./category/categoryFilesRouter');


app.use('/files',categoryFilesRouter);


module.exports = app;