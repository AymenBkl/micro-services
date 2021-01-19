const express = require('express');

const app = express();


const categoryRouter = require('./prescription/prescriptionRouter');

const categoryFilesRouter = require('./prescription/prescriptionFilesRouter');

app.use('/category',categoryRouter);

app.use('/files',categoryFilesRouter);


module.exports = app;