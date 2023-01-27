import ApiRoute from '../ApiRoute.js'

/**
 * Différentes méthodes associées aux routes de l'api
 */
export default class ApiMarketPlace extends ApiRoute {
   list(challengeID, page, segmentId, teamName, usersNationalitie, usersPreference) {
      const query = this.api.jsonToFormUrlEncoder({
         challengeID,
         page,
         segmentId,
         teamName,
         usersNationalitie,
         usersPreference,
      })

      return this.api.GET(`marketplace/users/available?${query}`)
   }

   getHistory(page, filters, challengeId, baseId) {
      const { types, states } = filters

      const query = this.api.jsonToFormUrlEncoder({
         page,
         ...(types && { types }),
         ...(states && { states }),
         challengeID: challengeId,
         ...(baseId && { baseID: baseId }),
      })

      return this.api.GET(`marketplace/histories?${query}`)
   }

   getQuota(challengeId, teamId) {
      const query = this.api.jsonToFormUrlEncoder({
         challengeID: challengeId,
         ...(teamId && { teamID: teamId }),
      })

      return this.api.GET(`marketplace/quotas?${query}`)
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
    * @return {Promise}
    */
   sendInvit(payload) {
      return this.api.POST('marketplace/users/invitations', payload)
   }
}


