const ApiRoute = require('../ApiRoute.js')
const Pool = require('../models/Pool');


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
    * @returns {Promise<Pool[]>} Liste des poules
    */
   list(challengeID, query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.get(`challenges/${challengeID}/pools${urlAdd}`).then(list => Array.isArray(list) ? list.map(data => new Pool(data)) : list)
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
   /**
    * Get a pool
    * @method get
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @returns {Promise<Pool>}
    */
   get(challengeID, poolID) {
      return this.api.get(`challenges/${challengeID}/pools/${poolID}`).then(data => new Pool(data))
   }

   /**
    * Create a pool
    * @method create
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {Object} data
    * @returns {Promise<Pool>}
    */
   create(challengeID, data) {
      return this.api.post(`challenges/${challengeID}/pools`, data).then(data => new Pool(data))
   }

   /**
    * Update a pool
    * @method update
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @param {Object} data
    * @returns {Promise<Pool>}
    */
   update(challengeID, poolID, data) {
      return this.api.put(`challenges/${challengeID}/pools/${poolID}`, data).then(data => new Pool(data))
   }

   /**
    * Delete a pool
    * @method delete
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @returns {Promise<Object>}
    */
   delete(challengeID, poolID) {
      return this.api.delete(`challenges/${challengeID}/pools/${poolID}`)
   }

   /**
    * List pool configs
    * @method listConfigs
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @returns {Promise<Object[]>}
    */
   listConfigs(challengeID) {
      return this.api.get(`challenges/${challengeID}/poolsconfigs`)
   }

   /**
    * Get a pool config
    * @method getConfig
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} configID
    * @returns {Promise<Object>}
    */
   getConfig(challengeID, configID) {
      return this.api.get(`challenges/${challengeID}/poolsconfigs/${configID}`)
   }

   /**
    * Create a pool config
    * @method createConfig
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   createConfig(challengeID, data) {
      return this.api.post(`challenges/${challengeID}/poolsconfigs`, data)
   }

   /**
    * Update a pool config
    * @method updateConfig
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} configID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   updateConfig(challengeID, configID, data) {
      return this.api.put(`challenges/${challengeID}/poolsconfigs/${configID}`, data)
   }

   /**
    * Delete a pool config
    * @method deleteConfig
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} configID
    * @returns {Promise<Object>}
    */
   deleteConfig(challengeID, configID) {
      return this.api.delete(`challenges/${challengeID}/poolsconfigs/${configID}`)
   }

   /**
    * Get teams in a pool
    * @method getTeams
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @returns {Promise<Object[]>}
    */
   getTeams(challengeID, poolID) {
      return this.api.get(`challenges/${challengeID}/pools/${poolID}/teams`)
   }

   /**
    * Get available teams for a pool
    * @method getTeamsAvailable
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @returns {Promise<Object[]>}
    */
   getTeamsAvailable(challengeID, poolID) {
      return this.api.get(`challenges/${challengeID}/pools/${poolID}/teams/available`)
   }

   /**
    * Add a team to a pool
    * @method addTeam
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   addTeam(challengeID, poolID, data) {
      return this.api.post(`challenges/${challengeID}/pools/${poolID}/teams`, data)
   }

   /**
    * Remove a team from a pool
    * @method removeTeam
    * @memberof ApiPool
    * @instance
    * @param {string} challengeID
    * @param {string} poolID
    * @param {string} teamID
    * @returns {Promise<Object>}
    */
   removeTeam(challengeID, poolID, teamID) {
      return this.api.delete(`challenges/${challengeID}/pools/${poolID}/teams/${teamID}`)
   }
}


