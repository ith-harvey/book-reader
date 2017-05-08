
exports.up = function(knex) {
  return knex.schema.createTable('authors',table => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('biography').notNullable()
    table.string('portrait_url').notNullable()
    table.timestamps(true,true)
  })

};

exports.down = function(knex) {
return knex.schema.dropTable('authors')
};
