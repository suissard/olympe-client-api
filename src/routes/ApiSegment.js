const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiSegment
 */
module.exports = class ApiSegment extends ApiRoute {
   /**
    * List segments
    * @method list
    * @memberof ApiSegment
    * @instance
    * @example OlympeApi.segments.list(1)
    *
    * @param {Number} challengeID
    * @returns {Promise<Object[]>} Liste des segments
    */
   list(challengeID) {
      return this.api.get(`challenges/${challengeID}/segments`)
   }
}


