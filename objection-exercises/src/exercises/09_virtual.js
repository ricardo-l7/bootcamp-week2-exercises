const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')

// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const user = await User.query().first()
  console.log(user)
  console.log(user.fullName)
  console.log(user.isMinor)

  const pet = await Pet.query().first()
  console.log(pet)
  console.log(pet.isAlligator)


  // -----
  cleanup()
}

run()
