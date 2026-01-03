const ApiRoute = require('../ApiRoute.js')
const Step = require('../models/Step');


/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiStep
 */
module.exports = class ApiStep extends ApiRoute {
   /**
    * List steps
    * @method list
    * @memberof ApiStep
    * @instance
    * @example OlympeApi.steps.list(1)
    *
    * @param {Number} challengeId
    * @returns {Promise<Step[]>} Liste des étapes
    */
   list(challengeId) {
      return this.api.get(`challenges/${challengeId}/steps`).then(list => list.map(data => new Step(data)))
   }

   /**
    * Récupère le classement d'une étape
    * @method getRanking
    * @memberof ApiStep
    * @instance
    * @example OlympeApi.steps.getRanking(1, 1, {})
    *
    * @param {Number} idChallenge
    * @param {Number} idStep
    * @param {Object} [query] Filtres
    * @returns {Promise<Object>} Classement de l'étape
    */
   getRanking(idChallenge, idStep, query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.get(`challenges/${idChallenge}/steps/${idStep}/ranking${urlAdd}`)
   }
}


