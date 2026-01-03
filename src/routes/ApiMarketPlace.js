const ApiRoute = require('../ApiRoute.js')

/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiMarketPlace
 */
module.exports = class ApiMarketPlace extends ApiRoute {
   /**
    * Liste des utilisateurs disponibles dans le marketplace
    * @method list
    * @memberof ApiMarketPlace
    * @instance
    * @example OlympeApi.marketplace.list(1, 1)
    * @param {number} challengeID
    * @param {number} page
    * @param {number} segmentId
    * @param {string} teamName
    * @param {string} usersNationalitie
    * @param {string} usersPreference
    * @returns {Promise<Object>}
    */
   list(challengeID, page, segmentId, teamName, usersNationalitie, usersPreference) {
      const query = this.api.jsonToFormUrlEncoder({
         challengeID,
         page,
         segmentId,
         teamName,
         usersNationalitie,
         usersPreference,
      })

      return this.api.get(`marketplace/users/available?${query}`)
   }

   /**
    * Historique du marketplace
    * @method getHistory
    * @memberof ApiMarketPlace
    * @instance
    * @example OlympeApi.marketplace.getHistory(1, {}, 1, 'base_id')
    * @param {number} page
    * @param {Object} filters
    * @param {string[]} filters.types
    * @param {string[]} filters.states
    * @param {number} challengeId
    * @param {string} baseId
    * @returns {Promise<Object>}
    */
   getHistory(page, filters, challengeId, baseId) {
      const { types, states } = filters

      const query = this.api.jsonToFormUrlEncoder({
         page,
         ...(types && { types }),
         ...(states && { states }),
         challengeID: challengeId,
         ...(baseId && { baseID: baseId }),
      })

      return this.api.get(`marketplace/histories?${query}`)
   }

   /**
    * Quotas du marketplace
    * @method getQuota
    * @memberof ApiMarketPlace
    * @instance
    * @example OlympeApi.marketplace.getQuota(1, 'team_id')
    * @param {number} challengeId
    * @param {string} teamId
    * @returns {Promise<Object>}
    */
   getQuota(challengeId, teamId) {
      const query = this.api.jsonToFormUrlEncoder({
         challengeID: challengeId,
         ...(teamId && { teamID: teamId }),
      })

      return this.api.get(`marketplace/quotas?${query}`)
   }

   /**
    * Envoie une invitation de prêt/transfert à un joueur d'une autre équipe
    * @method sendInvit
    * @memberof ApiMarketPlace
    * @instance
    * @example OlympeApi.marketplace.sendInvit({ invitationType: 'lent', userIDSource: 'user_id', ... })
    *
    * @param {Object} payload
    * @param {'lent' | 'transfer'} payload.invitationType
    * @param {string} payload.userIDSource
    * @param {string} payload.teamIDSource
    * @param {string} payload.teamIDDest
    * @param {number} payload.challengeID
    * @param {number} payload.lentExpirationDate
    * @return {Promise<Object>}
    */
   sendInvit(payload) {
      return this.api.post('marketplace/users/invitations', payload)
   }
   /**
    * Create a quota
    * @method createQuota
    * @memberof ApiMarketPlace
    * @instance
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   createQuota(data) {
      return this.api.post('marketplace/quotas', data)
   }

   /**
    * Update a quota
    * @method updateQuota
    * @memberof ApiMarketPlace
    * @instance
    * @param {string} id
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   updateQuota(id, data) {
      return this.api.put(`marketplace/quotas/${id}`, data)
   }

   /**
    * Delete a quota
    * @method deleteQuota
    * @memberof ApiMarketPlace
    * @instance
    * @param {string} id
    * @returns {Promise<Object>}
    */
   deleteQuota(id) {
      return this.api.delete(`marketplace/quotas/${id}`)
   }
}


