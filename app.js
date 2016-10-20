var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fileUpload = require('express-fileupload');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);

app.get('/', function(req, res) {
    res.render('index2', {title: 'Express'});
    console.log('get');
});

app.post('/', function(req, res) {
  var file1;

  if(!req.files) {
    res.send('No files were uploaded');
    return;  
    }

    file1 = req.files.file1;

    console.log(file1);
/////////mv를 이용한 파일 업로드///////////
    file1.mv(__dirname + '/sample.jpg', function(err) {
        if(err)
            res.status(500).send(err);
        else 
            res.send('File uploaded');
    }); 
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function() {
    console.log('Server on!');
});

module.exports = app;
