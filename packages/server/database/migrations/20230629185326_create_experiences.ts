import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('experience', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').nullable;
    table.date('date').defaultTo(knex.fn.now());

    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('experience');
}

