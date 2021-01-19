const express = require('express');

const app = express();



const categoryFilesRouter = require('./prescription/prescriptionFilesRouter');


app.use('/files',categoryFilesRouter);


module.exports = app;