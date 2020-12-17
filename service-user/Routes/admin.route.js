const express = require('express');

const app = express();

var router = express.Router();

const adminRouter = require('./user/adminRouter');


app.use('/admin',adminRouter);



module.exports = app;