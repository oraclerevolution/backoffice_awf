'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Tip = use('App/Models/Tip')
const {validate} = use('Validator')
const Database = use('Database')
/**
 * Resourceful controller for interacting with tips
 */
class TipController {
  /**
   * Show a list of all tips.
   * GET tips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tips = await Database.from('tips')
    return response.json({data:{tips:tips}})
  }

  /**
   * Render a form to be used for creating a new tip.
   * GET tips/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    //validate form inputs
    const validation = await validate(request.all(), {
      name:'required|max:50',
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
    }
    
    //create user
    const tip = await Tip.create({
      name: request.input('name'),
    })

    return response.json({data: {status: 'ok'}})
  }

  /**
   * Create/save a new tip.
   * POST tips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single tip.
   * GET tips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const tips_item = await Database.from('tips_items').where('tips_id', params.id)
    return response.json({data: {items: tips_item, status: 'ok'}})
  }

  /**
   * Render a form to update an existing tip.
   * GET tips/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tip details.
   * PUT or PATCH tips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a tip with id.
   * DELETE tips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TipController
