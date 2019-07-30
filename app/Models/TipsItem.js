'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipsItem extends Model {

    tips(){
        return this.belongsTo('App/Models/Tip')
    }
}

module.exports = TipsItem
