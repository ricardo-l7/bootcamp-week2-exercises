const { userParams } = require('../lib')
const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')


// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('1b59391e-0308-47b3-98eb-f090269c5b17')
  console.log(me)

  // Use that instance to create a new pet related that user
  const newPet = await me.$relatedQuery('pets').insert({
        type: 'ALLIGATOR',
        name: 'Yoda'
      }
  );
  console.log(newPet);

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const myPetsChildren = await me.$fetchGraph('[pets, child]');
  console.log(myPetsChildren);

  // -----
  cleanup()
}

run()
