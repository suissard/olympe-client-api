const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiSegment extends ApiRoute {
   /**
    * List segments
    *
    * @param {Number} challengeID
    * @returns {Promise<Object[]>} Liste des segments
    */
   list(challengeID) {
      return this.api.get(`challenges/${challengeID}/segments`)
   }
}


