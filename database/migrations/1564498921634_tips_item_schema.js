'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipsItemSchema extends Schema {
  up () {
    this.create('tips_items', (table) => {
      table.increments()
      table.integer('tips_id').unsigned().references('id').inTable('tips')
      table.string('file_name',200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tips_items')
  }
}

module.exports = TipsItemSchema
