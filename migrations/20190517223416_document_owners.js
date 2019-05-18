
exports.up = function(knex, Promise) {
  return knex.schema.createTable('document_owners', table => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('type')
    table.foreign('user_id').references('users.id')
    table.foreign('document_id').references('documents.id')
    table.uuid('user_id')
    table.uuid('document_id')
  })
};

exports.down = function(knex, Promise) {
  
};
