const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiStep extends ApiRoute {
   /**
    * List steps
    *
    * @param {Number} challengeId
    */
   list(challengeId) {
      return this.api.GET(`challenges/${challengeId}/steps`)
   }

   /**
    *
    * @param {Number} idChallenge
    * @param {Number} idStep
    */
   getRanking(idChallenge, idStep, query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.GET(`challenges/${idChallenge}/steps/${idStep}/ranking${urlAdd}`)
   }
}


