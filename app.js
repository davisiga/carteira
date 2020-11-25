const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routInvest = require('./routes/investimentos');
app.use(bodyParser.json()); // json de entrada no body

app.use('/investimentos', routInvest);
app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: false }));  // apenas dados simples


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Header',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
// })
module.exports = app;