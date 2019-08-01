'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Actualite = use('App/Models/Actualite')
const Database = use('Database')
/**
 * Resourceful controller for interacting with actualites
 */
class ActualiteController {
  /**
   * Show a list of all actualites.
   * GET actualites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const articles = await Actualite.all()
    return response.json({data: articles})
  }

  /**
   * Render a form to be used for creating a new actualite.
   * GET actualites/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new actualite.
   * POST actualites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single actualite.
   * GET actualites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const actualite = await Actualite.find(params.id)

    const res = {
      id: actualite.id,
      title: actualite.title,
      article: actualite.article,
      photo: actualite.photo
    }

    return response.json({data: res})
  }

  async images ({params, request, response}){
    const images = await Database.from('actualites').where('photo', params.img)

    return response.json(images)
  }

  /**
   * Render a form to update an existing actualite.
   * GET actualites/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update actualite details.
   * PUT or PATCH actualites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a actualite with id.
   * DELETE actualites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ActualiteController
