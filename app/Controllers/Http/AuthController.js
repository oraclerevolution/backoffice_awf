'use strict'

const {validate} = use('Validator')
const User = use('App/Models/User')

class AuthController {

  async login({ request, response, auth}){
    const {numero, password} = request.only(['numero', 'password'])

    const token = await auth.attempt(numero, password)
    return response.json(token)
    
  }

  async register({ request, session, response}){

    //validate form inputs
    const validation = await validate(request.all(), {
      username:'required',
      numero: 'required|unique:users,numero',
      password: 'required'
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
    }
    //create user
    const user = await User.create({
      username: request.input('username'),
      numero: request.input('numero'),
      password: request.input('password'),
    })

    return response.json({data: {user: user, status: 0}})
  }

}

module.exports = AuthController
