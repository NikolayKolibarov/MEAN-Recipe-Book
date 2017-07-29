const users = require('../users/users-routes')
const recipes = require('../recipes/recipes-routes')

module.exports = (app, env) => {
  app.use('/api/v1/recipes', recipes)
  app.use('/api/v1/users', users)
}
