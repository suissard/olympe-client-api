const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiPool
 */
module.exports = class ApiPool extends ApiRoute {
   /**
    * List a pool
    * @method list
    * @memberof ApiPool
    * @instance
    * @example OlympeApi.pools.list(1)
    * @param {number} challengeID
    * @param {Object} [query] Filtres
    * @returns {Promise<Object[]>} Liste des poules
    */
   list(challengeID, query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.get(`challenges/${challengeID}/pools${urlAdd}`)
   }

   /**
    * Get pool ranking
    * @method getRanking
    * @memberof ApiPool
    * @instance
    * @example OlympeApi.pools.getRanking(1, 1)
    *
    * @param {Number} challengeID
    * @param {Number} poolID
    * @returns {Promise<Object>} Classement de la poule
    */
   getRanking(challengeID, poolID) {
      return this.api.get(`challenges/${challengeID}/pools/${poolID}/ranking`)
   }
}


