'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/test', (req, res) => {
  const data = [{
    name: 'test',
    id: 1,
    desc: 'test example',
    isTrue: false,
  }, {
    name: 'test2',
    id: 2,
    desc: 'test2 example',
    isTrue: false,
  }];

  res.status(200).json(data);
});

app.listen(4000, () => {
  console.log('port 4000 is listen!');
});