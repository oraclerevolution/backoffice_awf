'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ThequeItem extends Model {

    theques(){
        return this.belongsTo('App/Models/Theque')
    }
}

module.exports = ThequeItem
