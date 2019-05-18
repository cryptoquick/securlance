
exports.up = function(knex, Promise) {
  return knex.schema.createTable('documents', table => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('name')
    table.string('link')
    table.string('type')
  })
};

exports.down = function(knex, Promise) {
  
};
