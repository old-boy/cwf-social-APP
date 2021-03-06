// var createError = require('http-errors');
/**
 * bodyParser 不支持 multipart/form-data 上传文件类型表单
 * multer 支持 multipart/form-data 上传文件类型表单
 */
const express = require('express')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')
const multer  = require('multer')
// const upload = multer({dest:'/uploads'});





var port = normalizePort(process.env.PORT || '4000');
const dburl = "mongodb://localhost:27017/social";


var index = require('./routes/index')
var users = require('./routes/users/index')
var usersInfo = require('./routes/users/userBaseInfo')
var usersTag = require('./routes/users/userTag')
var usersTitle = require('./routes/users/userTitle')
var usersFollow = require('./routes/users/userFollow')
var usersRole = require('./routes/users/userRole')
var upload = require('./routes/upload/index')



var app = express();

var mongoose = require('mongoose');
const { join } = require('path');
mongoose.Promise = global.Promise

mongoose.connect(dburl, { 
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useCreateIndex: true, 
  useUnifiedTopology: true }).then(() => console.log('Database Successful！')).catch((err) => console.log(err));

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

mongoose.connection.on('error', () => {
  console.log('Mongodb connected fail!')
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongodb disconnected!')
})

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Content-Type", "multipart/form-data");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser('ordersecrettoken'))
  app.use(session({
    secret: 'ordersecrettoken',
    cookie: {
      maxAge: 24 * 3600 * 1000 * 7
    },
    store: new MongoStore({
      url: "mongodb://localhost:27017/social"
    }),
    resave: false,
    saveUninitialized: false
  }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use(cors())


app.use('/', index)
app.use('/api/users', users)
app.use('/api/users', usersTag)
app.use('/api/users', usersTitle)
app.use('/api/users', usersInfo)
app.use('/api/users', usersFollow)
app.use('/api/users', usersRole)
app.use('/api/upload', upload)



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(port, 'localhost', () => {
  const host = server.address().address
  const port = server.address().port
  console.log("server started! 访问地址为 http://%s:%s", host, port)
});
