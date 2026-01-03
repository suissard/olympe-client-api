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

   /**
    * Get a ticket
    * @method get
    * @memberof ApiTicket
    * @instance
    * @param {string} challengeID
    * @param {string} ticketID
    * @returns {Promise<Ticket>}
    */
   get(challengeID, ticketID) {
      return this.api.get(`challenges/${challengeID}/tickets/${ticketID}`).then(data => new Ticket(data))
   }

   /**
    * Create a ticket
    * @method create
    * @memberof ApiTicket
    * @instance
    * @param {string} challengeID
    * @param {Object} data
    * @returns {Promise<Ticket>}
    */
   create(challengeID, data) {
      return this.api.post(`challenges/${challengeID}/tickets`, data).then(data => new Ticket(data))
   }

   /**
    * Update a ticket
    * @method update
    * @memberof ApiTicket
    * @instance
    * @param {string} challengeID
    * @param {string} ticketID
    * @param {Object} data
    * @returns {Promise<Ticket>}
    */
   update(challengeID, ticketID, data) {
      return this.api.put(`challenges/${challengeID}/tickets/${ticketID}`, data).then(data => new Ticket(data))
   }

   /**
    * Delete a ticket
    * @method delete
    * @memberof ApiTicket
    * @instance
    * @param {string} challengeID
    * @param {string} ticketID
    * @returns {Promise<Object>}
    */
   delete(challengeID, ticketID) {
      return this.api.delete(`challenges/${challengeID}/tickets/${ticketID}`)
   }

   /**
    * Delete a purchased ticket
    * @method deleteTicketPurchased
    * @memberof ApiTicket
    * @instance
    * @param {string} id
    * @returns {Promise<Object>}
    */
   deleteTicketPurchased(id) {
      return this.api.delete(`ticketspurchased/${id}`)
   }

   /**
    * Replace a purchased ticket
    * @method replaceTicketPurchased
    * @memberof ApiTicket
    * @instance
    * @param {string} sourceTicketID
    * @returns {Promise<Object>}
    */
   replaceTicketPurchased(sourceTicketID) {
      return this.api.post(`ticketspurchased/${sourceTicketID}/replace`)
   }
}


