const ApiRoute = require('../ApiRoute.js')


/**
 * Differentes méthodes associés aux routes de l'Api
 */
module.exports = class ApiOrganization extends ApiRoute {
   /**
    * Get a organization configs
    *
    * @param {String} id => Id of Organization
    * @returns {Promise<Object>} Organization configurations
    */
   getConfigs(id) {
      return this.api.get(`organizations/${id}/configs`)
   }
}


