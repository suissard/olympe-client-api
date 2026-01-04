const ApiRoute = require('../ApiRoute.js')
const OrganizationModel = require('../models/Organization');

/**
 * Differentes méthodes associés aux routes de l'Api
 * @namespace ApiOrganization
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
    * @returns {Promise<Organization>} Organization configurations
    */
   getConfigs(id) {
      return this.api.get(`organizations/${id}/configs`).then(data => new OrganizationModel(data))
   }

   /**
    * Get an organization
    * @method get
    * @memberof ApiOrganization
    * @instance
    * @param {string} id
    * @returns {Promise<Organization>}
    */
   get(id) {
      return this.api.get(`organizations/${id}`).then(data => new OrganizationModel(data))
   }

   /**
    * Get current organization
    * @method getCurrent
    * @memberof ApiOrganization
    * @instance
    * @returns {Promise<Organization>}
    */
   getCurrent() {
      return this.api.get(`organizations/current`).then(data => new OrganizationModel(data))
   }

   /**
    * Get current organization configs
    * @method getCurrentConfigs
    * @memberof ApiOrganization
    * @instance
    * @returns {Promise<any>}
    */
   getCurrentConfigs() {
      return this.api.get(`organizations/current/configs`)
   }

   /**
    * Get current organization communications
    * @method getCurrentCommunications
    * @memberof ApiOrganization
    * @instance
    * @returns {Promise<any>}
    */
   getCurrentCommunications() {
      return this.api.get(`organizations/current/communications`)
   }

   /**
    * Post communication to current organization
    * @method postCurrentCommunication
    * @memberof ApiOrganization
    * @instance
    * @param {object} data
    * @returns {Promise<any>}
    */
   postCurrentCommunication(data) {
      return this.api.post(`organizations/current/communications`, data)
   }

   /**
    * Reply to communication (or update)
    * @method postCurrentCommunicationReply
    * @memberof ApiOrganization
    * @instance
    * @param {string} idCommunication
    * @param {object} data
    * @returns {Promise<any>}
    */
   postCurrentCommunicationReply(idCommunication, data) {
      return this.api.post(`organizations/current/communications/${idCommunication}`, data)
   }
}

