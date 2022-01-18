const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['fullName', 'isMinor']
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get isMinor() {
    return (this.age < 18);
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    const Relation = require('./Relation')
    return {
    
      // name of relation
      pets: {
        relation: this.HasManyRelation,
        // what model you are relating the current one to
        modelClass: Pet,
        // starting from users id and relates to pets owner id
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        },
      },
      
      child: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id',
        },
      },

      parent: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id',
        },
      }

      }
    }
  }


module.exports = User
