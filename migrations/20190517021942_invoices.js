
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoices', table => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.uuid('user_id')
    table.foreign('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  
};
