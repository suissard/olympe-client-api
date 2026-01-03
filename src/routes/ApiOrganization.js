const ApiRoute = require('../ApiRoute.js')


/**
 * Differentes méthodes associés aux routes de l'Api
 * @class ApiOrganization
 */
module.exports = class ApiOrganization extends ApiRoute {
   /**
    * Get a organization configs
    * @method getConfigs
    * @memberof ApiOrganization
    * @instance
    * @example OlympeApi.organizations.getConfigs('org_id')
    *
    * @param {String} id => Id of Organization
    * @returns {Promise<Object>} Organization configurations
    */
   getConfigs(id) {
      return this.api.get(`organizations/${id}/configs`)
   }
}


