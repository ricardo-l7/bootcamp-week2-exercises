const casual = require('casual')
const userData = require('./users')

casual.define('message', ({sender, recipient}) => ({
  id: casual.uuid,
  senderid: sender,
  recipientid: recipient,
  content: casual.sentence
}))


const messageData = []

for (let i = 0; i < 20; ++i) {
  const sender = casual.random_element(userData).id 
  const recipient = casual.random_element(userData).id 
  messageData.push(casual.message({sender, recipient}))
}

module.exports = messageData