const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiMatch extends ApiRoute {
   // ==== Get match(s) ====
   /**
    *
    * @param {Object} query
    * @param {String} query.poolID  Filter by pool ID
    * @param {String} query.teamID  Filter by team ID
    * @param {String} query.challengesID  Filter by challenge ID. Allowed values: list of challengeID separated by comma. Like '1,2,3'
    * @param {String} query.casterID   Filter by casterID. Display matchs casted by this userID. Allowed values: ['all', 'none', 'userID like abc-abc-abc']
    * @param {String} query.scheduled  Filter by scheduled date. Allowed values: ['future', 'past', 'live']
    * @param {String} query.active  Filter by active steps. Allowed values: ['true']
    * @param {Number} query.limit   Limit the number of results
    */
   list(query) {
      const urlAdd = query ? `?${this.api.jsonToFormUrlEncoder(query)}` : ''

      return this.api.GET(`matchs${urlAdd}`)
   }

   /**
    *
    * @param {String} matchID
    * @param {Object} fields Fields permettant de récupérer des clés précises de l'objet user
    * @param {['thirdpartiesDiscord' | 'battlenetBtag' | 'email']} [fields.userFields]
    */
   get(matchID, fields) {
      return this.api.GET(`matchs/${matchID}${this.api.getFields(fields)}`)
   }

   // ==== Schedule ====
   /**
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @param {Date} date Timestamp
    */
   proposeMatchSchedule(challengeID, poolID, teamID, matchID, date) {
      return this.api.POST(
         `challenges/${challengeID}/pools/${poolID}/teams/${teamID}/matchs/${matchID}/dates`,
         { date }
      )
   }

   /**
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @param {Number} idDate Date ID
    * @param {Bool} accepted false: date refused / true: date accepted
    */
   replyToMatchSchedule(teamID, matchID, idDate, accepted) {
      return this.api.POST(`matchs/${matchID}/dates/${idDate}`, { teamID, accepted })
   }

   /**
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    */
   removeScheduledMatch(challengeID, poolID, teamID, matchID) {
      return this.api.DELETE(`challenges/${challengeID}/pools/${poolID}/teams/${teamID}/matchs/${matchID}/dates`)
   }

   // ==== Score ====
   /**
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    * @param {String} scores Included teamIDs, and each scores as array. Format: {"scores": [{"team1": 0, "team2": 0}]}
    */
   addAscore(teamID, matchID, scores) {
      return this.api.POST(`matchs/${matchID}/scores`, { teamID, data: JSON.stringify({ scores }) })
   }

   /**
    *
    * @param {Number} challengeID Challenge ID
    * @param {Number} poolID Pool ID
    * @param {String} teamID Team ID
    * @param {String} matchID Match ID
    */
   removeScore(matchID) {
      return this.api.DELETE(`matchs/${matchID}/scores`)
   }

   // ==== Cast ====
   /**
    * Add a Caster (me) to the match
    *
    * @param {String} matchID Match ID
    */
   assignCaster(matchID) {
      return this.api.POST(`matchs/${matchID}/casts`)
   }

   /**
    * Remove a caster (me) = require(the match
    *
    * @param {String} matchID Match ID
    */
   removeCaster(matchID) {
      return this.api.DELETE(`matchs/${matchID}/casts`)
   }

   // ==== Lineup ====
   /**
    * Assigner une ligneup a un match
    *
    * @param {String} matchID
    * @param {Number} lineupID
    */
   assignLineup(matchID, lineupID) {
      return this.api.POST(`matchs/${matchID}/lineups`, { lineupID })
   }
}


