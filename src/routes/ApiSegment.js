import ApiRoute from '../ApiRoute.js'


/**
 * Différentes méthodes associées aux routes de l'api
 */
export default class ApiSegment extends ApiRoute {
   /**
    * List segments
    *
    * @param {Number} challengeID
    */
   list(challengeID) {
      return this.api.GET(`challenges/${challengeID}/segments`)
   }
}


