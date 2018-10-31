'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
require('./app/routes')(app);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, () => {
  console.log(`We are live on http://${HOST}:${PORT}`);
});
// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);