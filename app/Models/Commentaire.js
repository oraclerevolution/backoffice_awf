'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Commentaire extends Model {

    actualites(){
        return this.belongsTo('App/Models/Actualite')
    }
}

module.exports = Commentaire
