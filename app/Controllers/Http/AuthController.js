'use strict'

const {validate} = use('Validator')
const User = use('App/Models/User')

class AuthController {

  async login({ request, response, auth}){
    const {email, password} = request.only(['email', 'password'])

    const token = await auth.attempt(email, password)
    return response.json(token)
    
  }

  async register({ request, session, response}){

    //validate form inputs
    const validation = await validate(request.all(), {
      username:'required',
      email: 'required|unique:users,',
      password: 'required'
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
    }
    //create user
    const user = await User.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
    })

    return response.json({data: {user: user, status: 0}})
  }

}

module.exports = AuthController
