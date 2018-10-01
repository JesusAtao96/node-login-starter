const express = require('express');

const app = express();

app.use('/users', require('./users'));
app.use(require('./login'));

module.exports = app;