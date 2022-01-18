const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const me = await User.query().insert({
    firstName:'Ricardo',
    lastName: 'Linares',
    email: 'test@email.com',
    age: 20,
  }).returning('*');
  console.log(me);


  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const ricPet = await Pet.query().insert({
    ownerId: '1b59391e-0308-47b3-98eb-f090269c5b17',
    type: 'FISH',
    name: 'Bolt',
  }).returning('*');
  console.log(ricPet);

  // -----
  cleanup()
}

run()
