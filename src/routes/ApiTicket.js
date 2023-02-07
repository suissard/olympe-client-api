const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiTicket extends ApiRoute {
   /**
    * List steps
    *
    * @param {Number} challengeId Challenge ID
    * @param {Boolean} active      [Query] Return only challenges with tickets not expired (this variable must be added in url as ?foo=bar)
    */
   list(challengeId, active) {
      const urlAdd = active ? `?${this.api.jsonToFormUrlEncoder({ active: 'true' })}` : ''
      return this.api.GET(`challenges/${challengeId}/tickets${urlAdd}`)
   }

   /**
    * Organization owner can force a team to buy a team ticket
    *
    * @param {Number} challengeId Challenge ID
    * @param {Number} idTicket    Ticket ID
    * @param {String} teamID      Team ID
    * @param {String} ticketType  Ticket type: personal or team
    */
   buy(challengeId, idTicket, teamID, ticketType) {
      return this.api.POST(`challenges/${challengeId}/tickets/${idTicket}`, { idTeam: teamID, ticketType })
   }
}


