/**
 * @name 
 * @author SunSeekerX
 * @time 2019-12-16 22:14:04
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 10:59:26
 */

var express = require('express')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var http = require('http')
var path = require('path');

var app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

// Router
require('./routes/index.js')(app)

// 404
app.use((req, res, next) => {
  res.json({ code: 404, msg: 'Not Found' })
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

/**
 * Get port from environment and store in Express.
 */

var port = '3000'
app.set('port', port)

/**
 * Create HTTP server.
 */

var server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`server running at port ${port}`)
})
