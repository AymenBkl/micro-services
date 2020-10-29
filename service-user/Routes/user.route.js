const express = require('express');

const app = express();

var router = express.Router();

const userRouter = require('./user/userRouter');


app.use('/user',userRouter);



module.exports = app;