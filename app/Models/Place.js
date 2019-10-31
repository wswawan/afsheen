'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Place extends Model {
    static boot(){
        super.boot()
        this.addTrait('@provider:CastAttributes')
    }

    static get casts(){
        return {
            location: 'json'
        }
    }
}

module.exports = Place
