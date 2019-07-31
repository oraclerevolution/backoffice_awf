'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/reseau', 'ReseauController.store')
Route.get('/articles', 'ActualiteController.index')
Route.get('/article/:id', 'ActualiteController.show')
Route.get('/speakers', 'SpeakerController.index')
Route.get('/commentaires/:id', 'CommentaireController.index')
Route.post('/newTheq', 'ThequeController.create')
Route.get('/allTheques', 'ThequeController.index')
Route.get('/theques/:id', 'ThequeController.show')
Route.post('/newTips', 'TipController.create')
Route.get('/allTips', 'TipController.index')
Route.get('tips/:id', 'TipController.show')

Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')