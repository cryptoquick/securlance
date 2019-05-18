
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoice_owners', table => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('type')
    table.foreign('user_id').references('users.id')
    table.foreign('invoice_id').references('invoices.id')
    table.uuid('user_id')
    table.uuid('invoice_id')
  })
};

exports.down = function(knex, Promise) {
  
};
