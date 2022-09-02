const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const tourRoute = require('./routes/tourRoutes');

const app = express();

app.use(express.json());

app.use(
  morgan('tiny', {
    stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }),
  })
);

app.use('/api/v1/tours', tourRoute);

module.exports = app;
