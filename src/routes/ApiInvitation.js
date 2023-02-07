const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiInvitation extends ApiRoute {
   /**
    *
    * @param {number} invitationID
    */
   remove(invitationID) {
      return this.api.DELETE(`invitations/${invitationID}`)
   }

   /**
    *
    * @param {number} invitationID
    * @param {0 | 1} accepted - 1: Accepter l'invitation / 0: Refuser l'invitation
    */
   reply(invitationID, accepted) {
      return this.api.POST(`invitations/${invitationID}`, {
         id: invitationID,
         accepted,
      })
   }
}


