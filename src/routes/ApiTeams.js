const ApiRoute = require('../ApiRoute.js')


const team = (data) => ({
   ...data,
   members: data?.members?.map((member) => ({
      ...member,
      username: member.username || 'No username',
      user: {
         ...member.user,
         username: member.user.username || 'No username',
      
   }   })),
})

/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiTeam extends ApiRoute {
   // === Get teams(s)
   /**
    * Get a team
    *
    * @param {String} teamID Id of team
    * @param {Object} fields Fields permettant de récupérer des clés précises de l'objet user
    * @param {['thirdpartiesDiscord' | 'battlenetBtag' | 'email']} [fields.userFields]
    */
   get(teamID, fields) {
      return this.api.GET(`teams/${teamID}${this.api.getFields(fields)}`).then((data) => team(data))
   }

   /**
    * Liste des teams
    */
   list() {
      return this.api.GET('teams').then((list) => list.map((data) => team(data)))
   }

   // ==== Manage team ====
   /**
    * Create team
    *
    * @param {String} name
    * @param {String} nationality
    *
    * @return {Object} Team
    */
   create(name, nationality) {
      return this.api.POST('teams', { name, nationality }).then((data) => team(data))
   }

   /**
    * Delete team
    *
    * @param {String} teamID
    */
   delete(teamID) {
      return this.api.DELETE(`teams/${teamID}`)
   }

   /**
    * Mettre à jour les liens des réseaux sociaux
    *
    * @param {String} teamID Id de l'équipe
    * @param {Object} data Réseaux sociaux
    */
   putExternalLinks(teamID, data) {
      return this.api.PUT(`teams/${teamID}/external-links`, data)
   }

   /**
    * Mettre à jour les données de l'équipe
    *
    * @param {String} teamID Team ID
    * @param {*} data Données à mettre à jour
    * @param {Boolean} file Si une image est envoyée, cette variable doit être définie sur `true`
    */
   update(teamID, data, file = false) {
      return this.api.PUT(`teams/${teamID}`, data, file)
   }

   /**
    *
    * @param {String} teamID
    * @param {String} memberID
    * @param {Array} role Allowed values: ['owner', 'president', 'vice president', 'staff', 'communication', 'esport director', 'manager', 'assistant manager', 'head coach', 'video analyst', 'mental coach']
    */
   addRoleToUser(teamID, memberID, role) {
      return this.api.POST(`teams/${teamID}/members/${memberID}/roles`, { role })
   }

   removeRoleToUser(teamID, memberID, role) {
      return this.api.DELETE(`teams/${teamID}/members/${memberID}/roles`, { role })
   }

   /**
    * Remove user in a team
    *
    * @param {String} teamID
    * @param {String} memberID
    *
    */
   removeUser(teamID, memberID) {
      return this.api.DELETE(`teams/${teamID}/members/${memberID}`)
   }

   /**
	 *
	 * @param {String} teamID
	 * @param {String} memberID
	 * @param {Array} gameRoles List of game roles with comma. Allowed values: ['main tank', 'off tank', 'dps hitscan', 'dps projectile', 'main heal', 'flex heal']. Example: 'main tank,main heal'
	 */
   updateMemberTags(teamID, memberID, gameRoles) {
      return this.api.PUT(`teams/${teamID}/members/${memberID}/tags`, { gameRoles })
   }

   // ==== Invitations ====
   applyToJoin(teamID) {
      return this.api.POST(`teams/${teamID}/apply`)
   }

   inviteUserToJoin(teamID, battlenetBtag) {
      return this.api.POST(`teams/${teamID}/invitations`, { battlenetBtag })
   }

   listMemberInvitation(teamID) {
      return this.api.GET(`teams/${teamID}/invitations`)
   }

   // ==== Lineup ====
   createLineup(teamID, name, usersID, substitutesID = []) {
      if (!(usersID instanceof Array) || !(substitutesID instanceof Array)) {
         throw 'API : Les users ID fournis doivent etre dans un Array'
      }

      return this.api.POST(`teams/${teamID}/lineups`, {
         name,
         usersID: usersID.join(','),
         substitutesID: substitutesID.length ? substitutesID.join(',') : '',
      })
   }

   listLineups(teamID) {
      const urlAdd = teamID ? `?${this.api.jsonToFormUrlEncoder({ teamID })}` : ''
      return this.api.GET(`lineups${urlAdd}`)
   }

   // ==== Actu ====
   /**
    * Historique public d'une équipe
    *
    * @param {String} teamID Identifiant de l'utilisateur
    *
    */
   getPublicActus(teamID) {
      return this.api.GET(`teams/${teamID}/histories`)
   }

   /**
	 * Get a team stats
	 * @param {String} teamID => Id of team
	 */
   getStats(teamID) {
      return this.api.GET(`teams/${teamID}/stats`)
   }

   /**
	 * Follow a team
	 * @param {String} teamID => Id of team
	 */
   follow(teamID) {
      return this.api.POST(`teams/${teamID}/follow`)
   }
}


