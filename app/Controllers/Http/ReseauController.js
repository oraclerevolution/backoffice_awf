'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Reseau = use('App/Models/Reseau')
const {validate} = use('Validator')
/**
 * Resourceful controller for interacting with reseaus
 */
class ReseauController {
  /**
   * Show a list of all reseaus.
   * GET reseaus
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new reseau.
   * GET reseaus/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new reseau.
   * POST reseaus
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {

    const validation = await validate(request.all(), {
      name: 'required|max:50',
      email: 'required|unique:users,email',
      type:'required',
      sujet: 'required|max:100',
      message: 'required'
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
    }

    const reseau = new Reseau();

    reseau.name = request.input('name');
    reseau.email = request.input('email');
    reseau.type = request.input('type');
    reseau.sujet = request.input('sujet');
    reseau.message = request.input('message');

    await reseau.save();
    return response.json({data:{response: reseau, status: 'ok'}})
  }

  /**
   * Display a single reseau.
   * GET reseaus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing reseau.
   * GET reseaus/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update reseau details.
   * PUT or PATCH reseaus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a reseau with id.
   * DELETE reseaus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ReseauController
