'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
    user(){ 
        return this.belongsTo('App/Models/User')
    }

    static get casts(){
        return {
            birthdate: 'date'
        }
    }

}

module.exports = Profile
