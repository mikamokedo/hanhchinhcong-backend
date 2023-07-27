const express = require('express');
const app = express();
const port = 3005;
var cors = require('cors')
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
  console.log(res)

  return next();
});

app.post('/push-info', function (req, res) {
  console.log(req.body)
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
module.exports = app;