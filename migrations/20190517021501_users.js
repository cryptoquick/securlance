
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('email').unique()
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  
};
