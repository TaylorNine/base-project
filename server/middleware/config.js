const config = require('config')

module.exports = function configMiddleware() {
  return (req, res, next) => {
    res.locals = {
      APP_NAME: config.get('appName'),
      ENV: config.get('env'),
    }
    next()
  }
}
