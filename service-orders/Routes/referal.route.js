
const express = require('express');

const app = express();


const referalRouter= require('./orders/referals');


app.use('/referal',referalRouter);



module.exports = app;