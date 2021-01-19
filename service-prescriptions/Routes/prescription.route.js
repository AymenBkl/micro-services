const express = require('express');

const app = express();


const prescriptionRouter = require('./prescription/prescriptionRouter');

const prescriptionFilesRouter = require('./prescription/prescriptionFilesRouter');

app.use('/prescription',prescriptionRouter);

app.use('/files',prescriptionFilesRouter);


module.exports = app;