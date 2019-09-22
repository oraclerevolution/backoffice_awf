'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReseauSchema extends Schema {
  up () {
    this.create('reseaus', (table) => {
      table.increments()
      table.string('name', 50)
      table.string('email',50).notNullable().unique()
      table.integer('type').notNullable()
      table.string('sujet', 100)
      table.text('message').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reseaus')
  }
}

module.exports = ReseauSchema
