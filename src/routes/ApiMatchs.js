const ApiRoute = require('../ApiRoute.js')
const MatchModel = require('../models/Match');


/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiMatch
 * @lends ApiMatch.prototype
 */
module.exports = class ApiMatch extends ApiRoute {
   // ==== Get match(s) ====
   // ==== Get match(s) ====
   /**
    * Récupère la liste des matchs
    * @method list
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.list({ active: true })
    *
    * @param {object} query Filtres
    * @param {string} [query.poolID]  Filter by pool ID
    * @param {string} [query.teamID]  Filter by team ID
    * @param {string} [query.challengesID]  Filter by challenge ID. Allowed values: list of challengeID separated by comma. Like '1,2,3'
    * @param {string} [query.casterID]   Filter by casterID. Display matchs casted by this userID. Allowed values: ['all', 'none', 'userID like abc-abc-abc']
    * @param {string} [query.scheduled]  Filter by scheduled date. Allowed values: ['future', 'past', 'live']
    * @param {string} [query.active]  Filter by active steps. Allowed values: ['true']
    * @param {number} [query.limit]   Limit the number of results
    * @returns {Promise<Match[]>} Liste des matchs
    */
   list(query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.get(`matchs${urlAdd}`).then(list => list.map(data => new MatchModel(data)))
   }

   /**
    * Récupère un match par son ID
    * @method get
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.get('match_id')
    *
    * @param {string} matchID
    * @param {object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {Array<('thirdpartiesDiscord' | 'battlenetBtag' | 'email')>} [fields.userFields]
    * @returns {Promise<Match>} Match
    */
   get(matchID, fields) {
      return this.api.get(`matchs/${matchID}${this.api.getFields(fields)}`).then(data => new MatchModel(data))
   }

   // ==== Schedule ====
   /**
    * Propose une date pour un match
    * @method proposeMatchSchedule
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.proposeMatchSchedule(1, 1, 'team_id', 'match_id', new Date())
    *
    * @param {number} challengeID Challenge ID
    * @param {number} poolID Pool ID
    * @param {string} teamID Team ID
    * @param {string} matchID Match ID
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
    * @method replyToMatchSchedule
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.replyToMatchSchedule('team_id', 'match_id', 123, true)
    *
    * @param {string} teamID Team ID
    * @param {string} matchID Match ID
    * @param {number} idDate Date ID
    * @param {boolean} accepted false: date refused / true: date accepted
    * @returns {Promise<Object>} Résultat de la réponse
    */
   replyToMatchSchedule(teamID, matchID, idDate, accepted) {
      return this.api.post(`matchs/${matchID}/dates/${idDate}`, { teamID, accepted })
   }

   /**
    * Supprime une date de match acceptée (annule le schedule)
    * @method removeScheduledMatch
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.removeScheduledMatch(1, 1, 'team_id', 'match_id')
    *
    * @param {number} challengeID Challenge ID
    * @param {number} poolID Pool ID
    * @param {string} teamID Team ID
    * @param {string} matchID Match ID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeScheduledMatch(challengeID, poolID, teamID, matchID) {
      return this.api.delete(`challenges/${challengeID}/pools/${poolID}/teams/${teamID}/matchs/${matchID}/dates`)
   }

   // ==== Score ====
   /**
    * Ajoute un score à un match
    * @method addAscore
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.addAscore('team_id', 'match_id', [{"team1": 3, "team2": 2}])
    *
    * @param {string} teamID Team ID
    * @param {string} matchID Match ID
    * @param {object[]} scores Included teamIDs, and each scores as array. Format: {"scores": [{"team1": 0, "team2": 0}]}
    * @returns {Promise<Object>} Résultat de l'ajout
    */
   addAscore(teamID, matchID, scores) {
      return this.api.post(`matchs/${matchID}/scores`, { teamID, data: JSON.stringify({ scores }) })
   }

   /**
    * Supprime le score d'un match
    * @method removeScore
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.removeScore('match_id')
    *
    * @param {string} matchID Match ID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeScore(matchID) {
      return this.api.delete(`matchs/${matchID}/scores`)
   }

   // ==== Cast ====
   /**
    * Add a Caster (me) to the match
    * @method assignCaster
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.assignCaster('match_id')
    *
    * @param {string} matchID Match ID
    * @returns {Promise<Object>} Résultat de l'ajout
    */
   assignCaster(matchID) {
      return this.api.post(`matchs/${matchID}/casts`)
   }

   /**
    * Remove a caster (me) from the match
    * @method removeCaster
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.removeCaster('match_id')
    *
    * @param {string} matchID Match ID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeCaster(matchID) {
      return this.api.delete(`matchs/${matchID}/casts`)
   }

   // ==== Lineup ====
   /**
    * Assigner une ligneup a un match
    * @method assignLineup
    * @memberof ApiMatch
    * @instance
    * @example OlympeApi.matchs.assignLineup('match_id', 123)
    *
    * @param {string} matchID
    * @param {number} lineupID
    */
   assignLineup(matchID, lineupID) {
      return this.api.post(`matchs/${matchID}/lineups`, { lineupID })
   }

   /**
    * Force la date d'un match (Admin/Staff)
    * @method forceDate
    * @memberof ApiMatch
    * @instance
    * @param {string} matchID
    * @param {Date} date
    * @returns {Promise<Object>}
    */
   forceDate(matchID, date) {
      return this.api.post(`matchs/${matchID}/force-date`, { date })
   }

   /**
    * Récupère les casters d'un match
    * @method getCasters
    * @memberof ApiMatch
    * @instance
    * @param {string} matchID
    * @returns {Promise<Object>}
    */
   getCasters(matchID) {
      return this.api.get(`matchs/${matchID}/casts`)
   }

   /**
    * Supprime les dates d'un match
    * @method removeDate
    * @memberof ApiMatch
    * @instance
    * @param {string} matchID
    * @returns {Promise<Object>}
    */
   removeDate(matchID) {
      return this.api.delete(`matchs/${matchID}/dates`)
   }
}


