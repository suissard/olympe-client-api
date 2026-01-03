const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiInvitation extends ApiRoute {
   /**
    * Supprime une invitation
    *
    * @param {string} invitationID Identifiant de l'invitation
    * @returns {Promise<Object>} Résultat de la suppression
    */
   remove(invitationID) {
      return this.api.delete(`invitations/${invitationID}`)
   }

   /**
    * Répond à une invitation
    *
    * @param {string} invitationID Identifiant de l'invitation
    * @param {0 | 1} accepted - 1: Accepter l'invitation / 0: Refuser l'invitation
    * @returns {Promise<Object>} Résultat de la requête
    */
   reply(invitationID, accepted) {
      return this.api.post(`invitations/${invitationID}`, {
         id: invitationID,
         accepted,
      })
   }
}


