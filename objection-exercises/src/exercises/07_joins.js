const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const t1 = await User.query().withGraphFetched('pets');
  console.dir(t1, { depth: null})

  // Get all users, their pets, AND their children
  const t2 = await User.query().withGraphFetched('[pets, child]')
  console.dir(t2, {depth: null})

  // Get all users, their parents, and their grandparents
  const t3 = await User.query().withGraphFetched('parent.^2')
  console.dir(t3, {depth: null})

  // Get all users, their pets, their chilren, and their childrens' pets
  const t4 = await User.query().withGraphFetched('[pets, child.[pets]]')
  console.dir(t4, { depth: null })

  // -----
  cleanup()
}

run()
