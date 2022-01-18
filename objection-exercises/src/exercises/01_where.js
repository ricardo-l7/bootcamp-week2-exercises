const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const specUser = await User.query().where('firstName','Ines');
  console.log(specUser);

  // Do the same with object notation
  const newSpecUser = await User.query().where({firstName:'Ines'});
  console.log(newSpecUser);


  // Get all DOGS and BIRDS
  const birdDog = await Pet.query().where('type', 'BIRD').orWhere('type','DOG');

  console.log(birdDog);

  // -----
  cleanup()
}

run()
