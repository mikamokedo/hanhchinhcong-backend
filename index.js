const express = require('express');
const app = express();
const port = 3005;
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.json())
const allowedReferers = [
  'https://h5.zdn.vn/zapps/3771171769955037159',
  'zbrowser://h5.zdn.vn/zapps/3771171769955037159'
];
app.use(cors())
app.use((req, res, next) => {
  const referer = req.headers.referer || '';
  const origin = req.headers.origin;
  const allowedCors = allowedReferers.some((element) =>
    referer.startsWith(element)
  );
  if (allowedCors) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  return next();
});

app.get('/', function (req, res) {
  res.send('Hello World! version 1.0');
});

app.post('/push-info', function (req, res) {
  const body = req.body;
  console.log(req.body)
  res.json({data:body});
});
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
module.exports = app;