const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')

module.exports = (config, app) => {
  app.use(morgan('dev'))
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/client', express.static(config.rootPath + '/client/'))
  app.use('/node_modules', express.static(config.rootPath + '/node_modules'))
  app.use('/bower_components', express.static(config.rootPath + '/bower_components'))
}
