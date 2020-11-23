var express = require('express');
var app = express();
const path = require('path');
// app.use(express.static(__dirname + '/dist/node_server'));
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/node_server/index.html'));
// });
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  next();
});

require('./controllers/quizzes-controller')(app);
require('./controllers/questions-controller')(app);

app.listen(3000);
