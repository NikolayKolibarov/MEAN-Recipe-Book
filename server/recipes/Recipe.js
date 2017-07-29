const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
  _creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
  name: String,
  description: String,
  imagePath: { type: String, default: 'default-img.png' }
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)
