import ApiRoute from '../ApiRoute.js'


/**
 * Differentes méthodes associés aux routes de l'Api
 */
export default class ApiOrganization extends ApiRoute {
   /**
    * Get a organization configs
    *
    * @param {String} id => Id of Organization
    */
   getConfigs(id) {
      return this.api.GET(`organizations/${id}/configs`)
   }
}


