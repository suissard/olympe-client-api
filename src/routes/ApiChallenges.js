const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiChallenge extends ApiRoute {
   /**
    * Liste des challenges
    */
   list(active) {
      const urlAdd = active ? `?${this.api.jsonToFormUrlEncoder({ active: 'true' })}` : ''

      return this.api.GET(`challenges${urlAdd}`).then((data) => {
         if (data && data.length > 0) return data

         return []
      })
   }
}

