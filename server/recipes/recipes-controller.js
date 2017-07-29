const Recipe = require('./Recipe')

function index (req, res) {
  Recipe
    .find({})
    .sort({createdAt: -1})
    .populate('_creator')
    .then(recipes => {
      res.json({success: true, message: 'Fetched recipes successfully.', recipes})
    })
}

function show (req, res) {
  const recipeId = req.params.id

  Recipe
    .findOne({_id: recipeId})
    .populate('_creator')
    .then(recipe => {
      res.json({success: true, message: 'Fetched recipe successfully.', recipe})
    })
}

function create (req, res) {
  const newRecipeData = req.body

  let newRecipe = new Recipe()
  newRecipe._creator = req.user._id
  newRecipe.name = newRecipeData.name
  newRecipe.description = newRecipeData.description
  newRecipe.save()

  res.json({success: true, message: 'Created recipe successfully.', recipe: newRecipe})
}

// function update (req, res) {
//   const heroId = req.params.id
//   const heroData = req.body

//   console.log(heroId)
//   console.log(heroData)

//   Hero
//     .findOne({_id: heroId})
//     .then(hero => {
//       hero.name = heroData.name
//       hero.save()

//       res.json({success: true, message: 'Updated hero successfully.', hero})
//     })
// }

// function remove (req, res) {
//   const heroId = req.params.id

//   Hero
//     .findByIdAndRemove(heroId)
//     .then(hero => {
//       console.log(hero, 'HERO')
//       res.json({success: true, message: 'Deleted hero successfully.'})
//     })
// }

function getUserRecipes (req, res) {
  const userId = req.params.id

  Recipe
    .find({_creator: userId})
    .sort({createdAt: '-1'})
    .populate('_creator')
    .then(recipes => {
      res.json({success: true, message: 'Fetched user recipes successfully.', recipes})
    })
}

module.exports = {
  index,
  show,
  create,
// update,
// remove,
getUserRecipes}
