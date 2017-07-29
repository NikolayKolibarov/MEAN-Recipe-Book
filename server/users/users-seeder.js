const User = require('./User')

module.exports = () => {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log(err)
    } else {
      if (users.length === 0) {
        let adminUser = new User()
        adminUser._id = '597a739218ce860b64f01a02'
        adminUser.username = 'admin'
        adminUser.email = 'admin@admin.com'
        adminUser.password = adminUser.encryptPassword('admin')
        adminUser.roles = ['Admin']
        adminUser.save()

        console.log('users collection seeded')
      }
    }
  })
}
