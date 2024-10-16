import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'atividades'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.text('descricao').nullable()
      table
        .integer('projeto_id')
        .unsigned()
        .references('id')
        .inTable('projetos')
        .onDelete('CASCADE')
      table.enum('status', ['pendente', 'em_andamento', 'concluida']).defaultTo('pendente')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
