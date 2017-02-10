const bodyParser = require('body-parser')
const chalk = require('chalk')
const config = require('config')
const configMiddleware = require('./middleware/config')
const express = require('express')
const logger = require('./lib/logger')
//const session = require('express-session')

const APP_NAME = config.get('appName')
const ENV = config.get('env')
const PORT = config.get('port')

const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('trust proxy', 1)
app.use(express.static('public'))
app.use(configMiddleware())
//app.use(session({
  //secret: config.get('sessionSecret'),
  //resave: false,
  //saveUninitialized: true,
  ////cookie: { secure: true }
//}))

// Routes
app.get('/', (req, res) => {
  res.render('pages/home')
})

// Serve app
app.listen(PORT)

logger.log(
  'info',
  '🌎 ',
  chalk.blue(APP_NAME),
  chalk.green('starting'),
  chalk.blue(ENV),
  chalk.green('server on port'),
  chalk.blue(PORT)
)
