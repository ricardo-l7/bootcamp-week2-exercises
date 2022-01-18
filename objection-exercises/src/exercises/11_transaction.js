const cleanup = require('../lib/cleanup')
const { userParams } = require('../lib')
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  const exerciseFunction = await User.transaction(async trx => {
    const newPerson = await User.query(trx).insert({
      firstName: 'Tom',
      lastName: 'Shelby',
      age: 45,
      email: 'tommy.shelby@peaky.com'});

    const newPet = await newPerson.$relatedQuery('pets', trx).insert({
      type: 'CAT',
      name: 'Grace'});

    const allPets = await newPerson.$relatedQuery('pets', trx).resultSize();

    if (allPets > 15){
      await newPerson.$relatedQuery('pets', trx).delete().where('type', 'BIRD')
    };

});

  // -----
  cleanup()
}

run()
