
exports.up = function(knex) {
  return knex.schema.createTable('books_authors',table => {
    table.increments()
    table.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE').index()
    table.integer('author_id').notNullable().references('id').inTable('authors').onDelete('CASCADE').index()
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
return knex.schema.dropTable('books_authors')
};
