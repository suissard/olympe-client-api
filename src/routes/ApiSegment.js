const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiSegment
 */
module.exports = class ApiSegment extends ApiRoute {
   /**
    * List segments
    * @method list
    * @memberof ApiSegment
    * @instance
    * @example OlympeApi.segments.list(1)
    *
    * @param {Number} challengeID
    * @returns {Promise<Object[]>} Liste des segments
    */
   list(challengeID) {
      return this.api.get(`challenges/${challengeID}/segments`)
   }
   /**
    * Create a segment
    * @method create
    * @memberof ApiSegment
    * @instance
    * @param {string} challengeID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   create(challengeID, data) {
      return this.api.post(`challenges/${challengeID}/segments`, data)
   }

   /**
    * Update a segment
    * @method update
    * @memberof ApiSegment
    * @instance
    * @param {string} challengeID
    * @param {string} segmentID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   update(challengeID, segmentID, data) {
      return this.api.put(`challenges/${challengeID}/segments/${segmentID}`, data)
   }

   /**
    * Delete a segment
    * @method delete
    * @memberof ApiSegment
    * @instance
    * @param {string} challengeID
    * @param {string} segmentID
    * @returns {Promise<Object>}
    */
   delete(challengeID, segmentID) {
      return this.api.delete(`challenges/${challengeID}/segments/${segmentID}`)
   }
}
