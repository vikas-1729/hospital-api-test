var express = require('express');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var cors = require('cors');

var path = require('path');

var config = require('./config');

var dotenv = require('dotenv').config();

var router = require('./router/index');

const app = express();
const port = 8080;

app.disable('x-powered-by');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', router);

app.use('/', function (req, res, next) {
  req.body.isMiddleware = true;
  next();
});

module.exports.start = async () => {
  try {
    await config.makeConnection();
    await app.listen(port);
    console.log(
      `connect start port is ${port} and enviroment is ${process.env.enviroment}`
    );
  } catch (error) {
    console.log(`err is ${error}`);
  }
};
