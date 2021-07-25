var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var limiter = require('express-rate-limit')
var cors = require('cors')

var indexRouter = require('./routes/index')
var apiRouter = require('./routes/api')

var app = express()

const PORT = process.env.PORT || 5000;

const limit = limiter({
    windowMs: 5000,
    max: 2,
    message: JSON.stringify({
        code: 500,
        message: "Apasi bang spam spam:)"
    })
})

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// app.use(limit15)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.set('json spaces', 2)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'views')))

app.use('/', indexRouter)
app.use('/api', limit, apiRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   __dirname = process.cwd();
//   res.sendFile(__dirname + '/views/404.html')
// })


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});