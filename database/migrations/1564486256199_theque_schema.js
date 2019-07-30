'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThequeSchema extends Schema {
  up () {
    this.create('theques', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('theques')
  }
}

module.exports = ThequeSchema
