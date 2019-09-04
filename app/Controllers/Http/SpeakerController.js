'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Speaker = use('App/Models/Speaker')
const Database = use('Database')

/**
 * Resourceful controller for interacting with speakers
 */
class SpeakerController {
  /**
   * Show a list of all speakers.
   * GET speakers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const speakers =  await Speaker.all()
    return response.json(speakers)
  }

  /**
   * Render a form to be used for creating a new speaker.
   * GET speakers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new speaker.
   * POST speakers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single speaker.
   * GET speakers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const speaker = await Speaker.find(params.id)
    
    const res = {
      id: speaker.id,
      name: speaker.name,
      fonction: speaker.fonction,
      biographie: speaker.biographie,
      photo: speaker.photo
    }

    return response.json({res})

  }

  /**
   * Render a form to update an existing speaker.
   * GET speakers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update speaker details.
   * PUT or PATCH speakers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a speaker with id.
   * DELETE speakers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SpeakerController
