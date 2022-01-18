exports.up = async knex => knex.schema.createTable('messages', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('senderid')
      .notNullable()
      .references('users.id')
  
    table
      .uuid('recipientid')
      .notNullable()
      .references('users.id')

    table
      .string('content')
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('messages')