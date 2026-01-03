const ApiRoute = require('../ApiRoute.js')
const Ticket = require('../models/Ticket');


/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiTicket
 */
module.exports = class ApiTicket extends ApiRoute {
   /**
    * List tickets
    * @method list
    * @memberof ApiTicket
    * @instance
    * @example OlympeApi.tickets.list(1, true)
    *
    * @param {Number} challengeId Challenge ID
    * @param {Boolean} [active]      [Query] Return only challenges with tickets not expired (this variable must be added in url as ?foo=bar)
    * @returns {Promise<Ticket[]>} Liste des tickets
    */
   list(challengeId, active) {
      const urlAdd = active ? `?${this.api.jsonToFormUrlEncoder({ active: 'true' })}` : ''
      return this.api.get(`challenges/${challengeId}/tickets${urlAdd}`).then(list => list.map(data => new Ticket(data)))
   }

   /**
    * Organization owner can force a team to buy a team ticket
    * @method buy
    * @memberof ApiTicket
    * @instance
    * @example OlympeApi.tickets.buy(1, 1, 'team_id', 'team')
    *
    * @param {Number} challengeId Challenge ID
    * @param {Number} idTicket    Ticket ID
    * @param {String} teamID      Team ID
    * @param {String} ticketType  Ticket type: personal or team
    * @returns {Promise<Object>} Résultat de l'achat
    */
   buy(challengeId, idTicket, teamID, ticketType) {
      return this.api.post(`challenges/${challengeId}/tickets/${idTicket}`, { idTeam: teamID, ticketType })
   }
}


