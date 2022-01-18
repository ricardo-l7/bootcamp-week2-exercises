const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const PB = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'test1@email.com',
    pets: [
      {
        type: 'DOG',
        name: 'Rocco'
      },
      {
        type: 'DOG',
        name: 'Rosey'
      }
    ]
  });

  console.log(PB);

  // -----
  cleanup()
}

run()
