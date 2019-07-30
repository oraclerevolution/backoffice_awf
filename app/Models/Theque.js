'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Theque extends Model {

    theque_items(){
        return this.hasMany('App/Models/ThequeItem')
    }
}

module.exports = Theque
