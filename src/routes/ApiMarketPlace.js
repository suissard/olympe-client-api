const ApiRoute = require('../ApiRoute.js')

/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiMarketPlace extends ApiRoute {
   /**
    * Liste des utilisateurs disponibles dans le marketplace
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
}


