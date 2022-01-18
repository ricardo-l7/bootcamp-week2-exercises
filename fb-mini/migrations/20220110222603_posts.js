exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('posterid')
      .notNullable()
      .references('users.id')
  
    table
      .string('postmessage')
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')