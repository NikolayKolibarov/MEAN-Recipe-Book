const express = require('express')
let router = express.Router()
const usersController = require('./users-controller')
const auth = require('../middlewares/auth')

router.get('', [auth.requireAuth, auth.isInRole('Admin')], (req, res) => {
  usersController.index(req, res)
})

router.delete('/:id', [auth.requireAuth, auth.isInRole('Admin')], (req, res) => {
  usersController.remove(req, res)
})

router.post('/register', auth.isGuest, (req, res) => {
  usersController.register(req, res)
})

router.post('/login', auth.requireSignIn, (req, res) => {
  usersController.signIn(req, res)
})

router.post('/logout', (req, res) => {
  usersController.logout(req, res)
})

router.get('/:username', (req, res) => {
  usersController.show(req, res)
})

module.exports = router
