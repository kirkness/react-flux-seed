'use strict';

let express = require('express');
let app = express();
let path = require('path');

app.use('/', express.static(__dirname + '/../build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src/index.html'));
});

app.listen(3000, () => {
  console.log('React Seed is Running');
});
