'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThequeItemSchema extends Schema {
  up () {
    this.create('theque_items', (table) => {
      table.increments()
      table.integer('theque_id').unsigned().references('id').inTable('theques')
      table.string('video_name',200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('theque_items')
  }
}

module.exports = ThequeItemSchema
