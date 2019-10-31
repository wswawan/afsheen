'use strict'

const User = use('App/Models/User')
const Profile = use('App/Models/Profile')

class UserController {
  
  async login({ request, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }

  async register({ request }) {
    const { email, password } = request.all();
    const user = await User.create({
      email,
      password,
      username: email
    })
    return await user
  }

  async index({ auth }) {
    const user = await auth.getUser()
    await user.load('profile')
    return user
  }

  async lists() {
    return await User.query().with('profile').fetch()
  }

  async create({ request, auth }) {
    const user = await auth.getUser()
    const all = await request.post()
    const profile = await Profile.create(all)

    await user.profile().save(profile)

    return profile
  }

  async update({ request, params }) {
    const all = request.post()
    const { id } = params
    const profile = await Profile.findBy('user_id', id)
    profile.merge(all)
    await profile.save()
    return profile
  }

  async destroy({ params }) {
    const { id } = params
    const user = await User.find(id)
    await user.profile().delete()
    await user.delete()
    return 'User deleted'
  }

}

module.exports = UserController
