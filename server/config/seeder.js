const usersCollectionSeeder = require('../users/users-seeder')
const recipesCollectionSeeder = require('../recipes/recipes-seeder')

module.exports = () => {
  usersCollectionSeeder()
  recipesCollectionSeeder()
}
