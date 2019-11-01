'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('auth/register', 'UserController.register')
  Route.post('auth/login', 'UserController.login')
  Route.get('user', 'UserController.index')
  Route.get('users', 'UserController.lists')
  Route.patch('profile/:id', 'UserController.update').middleware('auth')
  Route.post('profile/create', 'UserController.create').middleware('auth')
  Route.delete('user/:id', 'UserController.destroy').middleware('auth')
  Route.post('place/create', 'PlaceController.create')
  Route.get('places', 'PlaceController.index')
  Route.patch('place/:id', 'PlaceController.update')
  Route.delete('place/:id', 'PlaceController.delete')
})
.prefix('api');
