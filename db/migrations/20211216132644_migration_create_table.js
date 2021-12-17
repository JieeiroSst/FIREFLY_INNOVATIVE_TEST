exports.up =async function(knex) {
    return await knex.schema
         .createTable('users', (table) => {
             table.increments('id').unsigned().primary();
             table.string('firstname').notNull();
             table.string('lastname').notNull();
             table.integer('age').notNull();
         })
 };
 
exports.down =async function(knex) {
   return await knex.schema
         .dropTable('users')
 };