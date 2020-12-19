
const express = require('express');

const app = express();


const ordersRouter = require('./orders/orders');


app.use('/orders',ordersRouter);



module.exports = app;