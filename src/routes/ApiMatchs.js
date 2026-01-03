const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiMatch extends ApiRoute {
   // ==== Get match(s) ====
   // ==== Get match(s) ====
   /**
    * Récupère la liste des matchs
    *
    * @param {Object} query Filtres
    * @param {String} [query.poolID]  Filter by pool ID
    * @param {String} [query.teamID]  Filter by team ID
    * @param {String} [query.challengesID]  Filter by challenge ID. Allowed values: list of challengeID separated by comma. Like '1,2,3'
    * @param {String} [query.casterID]   Filter by casterID. Display matchs casted by this userID. Allowed values: ['all', 'none', 'userID like abc-abc-abc']
    * @param {String} [query.scheduled]  Filter by scheduled date. Allowed values: ['future', 'past', 'live']
    * @param {String} [query.active]  Filter by active steps. Allowed values: ['true']
    * @param {Number} [query.limit]   Limit the number of results
    * @returns {Promise<Object[]>} Liste des matchs
    */
   list(query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.get(`matchs${urlAdd}`)
   }

   /**
    * Récupère un match par son ID
    *
    * @param {String} matchID
    * @param {Object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {['thirdpartiesDiscord' | 'battlenetBtag' | 'email']} [fields.userFields]
    * @returns {Promise<Object>} Match
    */
   get(matchID, fields) {
      return this.api.get(`matchs/${matchID}${this.api.getFields(fields)}`)
   }

   // ==== Schedule ====
   /**
    * Propose une date pour un match
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @param {Date} date Timestamp
    * @returns {Promise<Object>} Résultat de la proposition
    */
   proposeMatchSchedule(challengeID, poolID, teamID, matchID, date) {
      return this.api.post(
         `challenges/${challengeID}/pools/${poolID}/teams/${teamID}/matchs/${matchID}/dates`,
         { date }
      )
   }

   /**
    * Répond à une proposition de date de match
    *
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @param {Number} idDate Date ID
    * @param {boolean} accepted false: date refused / true: date accepted
    * @returns {Promise<Object>} Résultat de la réponse
    */
   replyToMatchSchedule(teamID, matchID, idDate, accepted) {
      return this.api.post(`matchs/${matchID}/dates/${idDate}`, { teamID, accepted })
   }

   /**
    * Supprime une date de match acceptée (annule le schedule)
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeScheduledMatch(challengeID, poolID, teamID, matchID) {
      return this.api.delete(`challenges/${challengeID}/pools/${poolID}/teams/${teamID}/matchs/${matchID}/dates`)
   }

   // ==== Score ====
   /**
    * Ajoute un score à un match
    *
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @param {Object[]} scores Included teamIDs, and each scores as array. Format: {"scores": [{"team1": 0, "team2": 0}]}
    * @returns {Promise<Object>} Résultat de l'ajout
    */
   addAscore(teamID, matchID, scores) {
      return this.api.post(`matchs/${matchID}/scores`, { teamID, data: JSON.stringify({ scores }) })
   }

   /**
    * Supprime le score d'un match
    *
    * @param {String} matchID Match ID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeScore(matchID) {
      return this.api.delete(`matchs/${matchID}/scores`)
   }

   // ==== Cast ====
   /**
    * Add a Caster (me) to the match
    *
    * @param {String} matchID Match ID
    * @returns {Promise<Object>} Résultat de l'ajout
    */
   assignCaster(matchID) {
      return this.api.post(`matchs/${matchID}/casts`)
   }

   /**
    * Remove a caster (me) from the match
    *
    * @param {String} matchID Match ID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeCaster(matchID) {
      return this.api.delete(`matchs/${matchID}/casts`)
   }

   // ==== Lineup ====
   /**
    * Assigner une ligneup a un match
    *
    * @param {String} matchID
    * @param {Number} lineupID
    */
   assignLineup(matchID, lineupID) {
      return this.api.post(`matchs/${matchID}/lineups`, { lineupID })
   }
}


