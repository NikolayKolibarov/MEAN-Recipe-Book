const Recipe = require('./Recipe')

module.exports = () => {
  Recipe.find({}).exec((err, recipes) => {
    if (err) {
      console.log(err)
    }

    if (recipes.length === 0) {
      const recipesData = [
        {
          name: 'Peanut Butter Pie',
          description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
          imagePath: 'peanut-butter-pie.jpg'
        },
        {
          name: 'Strawberry Lime Smoothie Pops',
          description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
          imagePath: 'strawberry-lime-smoothie-pops.jpg'
        }

      ]

      for (let repice of recipesData) {
        let newRepice = new Recipe()
        newRepice._creator = '597a739218ce860b64f01a02'
        newRepice.name = repice.name
        newRepice.description = repice.description
        newRepice.imagePath = repice.imagePath
        newRepice.save()
      }

      console.log('repices collection seeded')
    }
  })
}
