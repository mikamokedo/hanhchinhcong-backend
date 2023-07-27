const express = require('express');
const app = express();
const port = 3005;
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World! version 1.2');
});
// const allowedOrigins = ["https://h5.zdn.vn/", "zbrowser://h5.zdn.vn/"];
// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   // if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   // }
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   return next();
// });




app.post('/push-info', function (req, res) {
  const body = req.body;
  console.log(req.body)
  res.json({data:body});
});
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
module.exports = app;