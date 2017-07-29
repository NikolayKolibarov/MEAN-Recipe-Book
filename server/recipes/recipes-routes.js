const express = require('express')
let router = express.Router()
const recipesController = require('./recipes-controller')
const auth = require('../middlewares/auth')

router.get('', (req, res) => {
  recipesController.index(req, res)
})

router.get('/:id', (req, res) => {
  recipesController.show(req, res)
})

router.post('', auth.requireAuth, (req, res) => {
  recipesController.create(req, res)
})

// router.put('/:id', (req, res) => {
//   recipesController.update(req, res)
// })

// router.delete('/:id', (req, res) => {
//   recipesController.remove(req, res)
// })

router.get('/user/:id', (req, res) => {
  recipesController.getUserRecipes(req, res)
})

module.exports = router
