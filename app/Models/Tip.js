'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tip extends Model {

    tips_item(){
        return this.hasMany('App/Models/TipsItem')
    }
}

module.exports = Tip
