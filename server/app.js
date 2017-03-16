'use strict'

let express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('./services/logger'),
  bodyParser = require('body-parser');

// Route Controllers
//
let tenants = require('./routes/tenants'),
  users = require('./routes/users');

var app = express();

// configure express
//
logger.debug("Overriding 'Express' logger");
app.use(require('morgan')("combined", {"stream": logger.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/../dist')));

// Set up resources
//
app.use('/users', users);
app.use('/tenants', tenants);


// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // this allows CORS from any ip, maybe consider locking this down a bit?
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use(function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../dist/index.html')); // for 404 error send the index page from production build
});

module.exports = app;
