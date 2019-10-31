'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
    user(){ 
        return this.belongsTo('App/Models/User')
    }

    static formatDates(field, value){
        if(field === 'birthdate'){
            return value.format('YYYY-MM-DD')
        }

        return super.formatDates(field, value)
    }

    static castDates(field, value){
        if(field === 'birthdate'){
            return `${value.fromNow(true)} old`
        }

        return super.formatDates(field, value)
    }

}

module.exports = Profile
