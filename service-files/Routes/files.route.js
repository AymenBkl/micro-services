const express = require('express');

const app = express();

const fileRouter = require('./files/fileRouter');


app.use('/files',fileRouter);



module.exports = app;