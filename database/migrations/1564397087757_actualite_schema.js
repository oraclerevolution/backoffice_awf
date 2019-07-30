'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActualiteSchema extends Schema {
  up () {
    this.create('actualites', (table) => {
      table.increments()
      table.string('title', 70)
      table.string('preview', 200)
      table.text('article')
      table.string('photo', 200)
      table.timestamps()
    })
  }

  down () {
    this.drop('actualites')
  }
}

module.exports = ActualiteSchema
