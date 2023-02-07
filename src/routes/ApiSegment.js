const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiSegment extends ApiRoute {
   /**
    * List segments
    *
    * @param {Number} challengeID
    */
   list(challengeID) {
      return this.api.GET(`challenges/${challengeID}/segments`)
   }
}


