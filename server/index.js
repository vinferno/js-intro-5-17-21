const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const users = ['larry', 'moe', 'curly'];

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});
app.get('/users', function (req, res, next) {
  res.json({users: users });
});
app.post('/users', function (req, res, next) {
  console.log(req.body);
  if (req.body.user) {
    users.push(req.body.user);
  }
  res.json({users: users, msg: 'you posted a user' });
});
app.listen(port, function () {
  console.log('CORS-enabled web server listening on port', port)
})