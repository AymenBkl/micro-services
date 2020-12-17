
const express = require('express');

const app = express();


const messageRouter = require('./message/messages');


app.use('/messages',messageRouter);



module.exports = app;