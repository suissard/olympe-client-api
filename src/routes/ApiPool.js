const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiPool extends ApiRoute {
   /**
    * List pools
    *
    * @param {Number} challengeID
    */
   list(challengeID, query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.GET(`challenges/${challengeID}/pools${urlAdd}`)
   }

   /**
    * Get pool ranking
    *
    * @param {Number} challengeID
    * @param {Number} poolID
    */
   getRanking(challengeID, poolID) {
      return this.api.GET(`challenges/${challengeID}/pools/${poolID}/ranking`)
   }
}


