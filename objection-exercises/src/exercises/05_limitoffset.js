const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const fFive = await User.query().limit(5).orderBy('lastName','asc');
  console.log(fFive)
  
  // Get the second 5 users, ordered by lastName
  const sFive= await User.query().limit(5).offset(5).orderBy('lastName','asc');
  console.log(sFive)


  // -----
  cleanup()
}

run()
