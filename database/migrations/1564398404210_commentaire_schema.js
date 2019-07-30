'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentaireSchema extends Schema {
  up () {
    this.create('commentaires', (table) => {
      table.increments()
      table.string('commentaire',200)
      table.integer('article_id').unsigned().references('id').inTable('actualites')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('commentaires')
  }
}

module.exports = CommentaireSchema
