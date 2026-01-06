const ApiRoute = require('../ApiRoute.js')
const StepModel = require('../models/Step');


/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiStep
 */
module.exports = class ApiStep extends ApiRoute {
   /**
    * List steps
    * @method list
    * @memberof ApiStep
    * @instance
    * @example OlympeApi.steps.list(1)
    *
    * @param {number} challengeId
    * @returns {Promise<Step[]>} Liste des étapes
    */
   list(challengeId) {
      return this.api.get(`challenges/${challengeId}/steps`).then(list => list.map(data => new StepModel(data)))
   }

   /**
    * Récupère le classement d'une étape
    * @method getRanking
    * @memberof ApiStep
    * @instance
    * @example OlympeApi.steps.getRanking(1, 1, {})
    *
    * @param {number} idChallenge
    * @param {number} idStep
    * @param {object} [query] Filtres
    * @returns {Promise<object>} Classement de l'étape
    */
   getRanking(idChallenge, idStep, query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.get(`challenges/${idChallenge}/steps/${idStep}/ranking${urlAdd}`)
   }
   /**
    * Get a step
    * @method get
    * @memberof ApiStep
    * @instance
    * @param {string} challengeID
    * @param {string} stepID
    * @returns {Promise<Step>}
    */
   get(challengeID, stepID) {
      return this.api.get(`challenges/${challengeID}/steps/${stepID}`).then(data => new StepModel(data))
   }

   /**
    * Create a step
    * @method create
    * @memberof ApiStep
    * @instance
    * @param {string} challengeID
    * @param {object} data
    * @returns {Promise<Step>}
    */
   create(challengeID, data) {
      return this.api.post(`challenges/${challengeID}/steps`, data).then(data => new StepModel(data))
   }

   /**
    * Update a step
    * @method update
    * @memberof ApiStep
    * @instance
    * @param {string} challengeID
    * @param {string} stepID
    * @param {object} data
    * @returns {Promise<Step>}
    */
   update(challengeID, stepID, data) {
      return this.api.put(`challenges/${challengeID}/steps/${stepID}`, data).then(data => new StepModel(data))
   }

   /**
    * Delete a step
    * @method delete
    * @memberof ApiStep
    * @instance
    * @param {string} challengeID
    * @param {string} stepID
    * @returns {Promise<object>}
    */
   delete(challengeID, stepID) {
      return this.api.delete(`challenges/${challengeID}/steps/${stepID}`)
   }

   /**
    * Get available teams for steps
    * @method getTeamsAvailable
    * @memberof ApiStep
    * @instance
    * @param {string} challengeID
    * @returns {Promise<object[]>}
    */
   getTeamsAvailable(challengeID) {
      return this.api.get(`challenges/${challengeID}/steps/teams-available`)
   }
}


