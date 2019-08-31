'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThematiqueSchema extends Schema {
  up () {
    this.create('thematiques', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('thematiques')
  }
}

module.exports = ThematiqueSchema
