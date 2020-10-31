const express = require('express');

const app = express();

var router = express.Router();

const userRouter = require('./category/categoryRouter');


app.use('/user',userRouter);



module.exports = app;