const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get virtualAttributes() {
    return ['isAlligator']
  }

  get isAlligator() {
    return (this.type === 'ALLIGATOR')
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: this.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.ownerId',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Pet
