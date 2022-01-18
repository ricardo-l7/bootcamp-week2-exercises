const casual = require('casual')
const userData = require('./users')

casual.define('post', ({poster}) => ({
  id: casual.uuid,
  posterid: poster,
  postmessage: casual.sentence
}))


const postData = []

for (let i = 0; i < 20; ++i) {
  const poster = casual.random_element(userData).id 
  postData.push(casual.post({poster}))
}

module.exports = postData
