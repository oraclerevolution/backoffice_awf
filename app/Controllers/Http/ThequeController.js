'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Theque = use('App/Models/Theque')
const {validate} = use('Validator')
const Database = use('Database')
/**
 * Resourceful controller for interacting with theques
 */
class ThequeController {
  /**
   * Show a list of all theques.
   * GET theques
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const theques = await Database.from('theques')
    return response.json({data: {theques: theques, status: 'ok'}})
  }

  /**
   * Render a form to be used for creating a new theque.
   * GET theques/create
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
    const theque = await Theque.create({
      name: request.input('name'),
    })

    return response.json({data: {status: 'ok'}})

  }

  /**
   * Create/save a new theque.
   * POST theques
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single theque.
   * GET theques/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const theque_item = await Database.from('theque_items').where('theque_id', params.id)
    return response.json({data: {items: theque_item, status: 'ok'}})
  }

  /**
   * Render a form to update an existing theque.
   * GET theques/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update theque details.
   * PUT or PATCH theques/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a theque with id.
   * DELETE theques/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ThequeController
