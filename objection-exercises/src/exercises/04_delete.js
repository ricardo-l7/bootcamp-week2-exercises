const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const test = await Pet.query().delete().where('type', 'CAT').returning('*');
  console.log(test)

  // -----
  cleanup()
}

run()
