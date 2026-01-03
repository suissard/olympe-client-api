const ApiRoute = require('../ApiRoute.js')
const Challenge = require('../models/Challenge');


/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiChallenge
 */
module.exports = class ApiChallenge extends ApiRoute {
   /**
    * Liste des challenges
    * @method list
    * @memberof ApiChallenge
    * @instance
    * @example OlympeApi.challenges.list(true)
    * @param {boolean} [active] Récupérer uniquement les challenges actifs
    * @returns {Promise<Challenge[]>} Liste des challenges
    */
   list(active) {
      const urlAdd = active ? `?${this.api.jsonToFormUrlEncoder({ active: 'true' })}` : ''

      return this.api.get(`challenges${urlAdd}`).then((data) => {
         if (data && data.length > 0) return data.map(d => new Challenge(d))

         return []
      })
   }
}

