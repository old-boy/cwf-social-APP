var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')
var MongoStore = require('connect-mongo')(expressSession)
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var morgan = require('morgan') //日志
var port = normalizePort(process.env.PORT || '3000');

var app = express()
mongoose.Promise = global.Promise
const dburl = "mongodb://localhost:27017/social";

mongoose.connect(dburl, { 
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true 
}).then(() => console.log('Database Successful！')).catch((err) => console.log(err));


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

app.set('views', path.join(__dirname, 'views'))
  

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('appsecrettoken'))
app.use(expressSession({
secret: 'appsecrettoken',
cookie: {
    maxAge: 24 * 3600 * 1000 * 7
},
store: new MongoStore({
    url: dburl
}),
resave: false,
saveUninitialized: false
}))

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'jade')

//router
var index = require('./routes/index')

app.use('/', index)

  // catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
  
    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })
  
  
  const server = app.listen(port, 'localhost', () => {
    const host = server.address().address
    const port = server.address().port
    console.log("server started! 访问地址为 http://%s:%s", host, port)
  });