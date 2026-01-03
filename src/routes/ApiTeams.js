const ApiRoute = require('../ApiRoute.js')
const Team = require('../models/Team');

/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiTeam
 */
module.exports = class ApiTeam extends ApiRoute {
   // === Get teams(s)
   /**
    * Récupère une équipe
    * @method get
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.get('team_id')
    *
    * @param {String} teamID Id of team
    * @param {Object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {Array<('thirdpartiesDiscord' | 'battlenetBtag' | 'email')>} [fields.userFields]
    * @returns {Promise<Team>} Équipe
    */
   get(teamID, fields) {
      return this.api.get(`teams/${teamID}${this.api.getFields(fields)}`).then((data) => new Team(data))
   }

   /**
    * Liste des teams
    * @method list
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.list()
    * @returns {Promise<Team[]>} Liste des équipes
    */
   list() {
      return this.api.get('teams').then((list) => list.map((data) => new Team(data)))
   }

   // ==== Manage team ====
   /**
    * Create team
    * @method create
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.create('Team Name', 'FR')
    *
    * @param {String} name
    * @param {String} nationality
    *
    * @returns {Promise<Team>} Team created
    */
   create(name, nationality) {
      return this.api.post('teams', { name, nationality }).then((data) => new Team(data))
   }

   /**
    * Delete team
    * @method delete
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.delete('team_id')
    *
    * @param {String} teamID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   delete(teamID) {
      return this.api.delete(`teams/${teamID}`)
   }

   /**
    * Mettre à jour les liens des réseaux sociaux
    * @method putExternalLinks
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.putExternalLinks('team_id', { twitter: 'url' })
    *
    * @param {String} teamID Id de l'équipe
    * @param {Object} data Réseaux sociaux
    * @returns {Promise<Object>} Résultat de la mise à jour
    */
   putExternalLinks(teamID, data) {
      return this.api.put(`teams/${teamID}/external-links`, data)
   }

   /**
    * Mettre à jour les données de l'équipe
    * @method update
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.update('team_id', { name: 'New Name' })
    *
    * @param {String} teamID Team ID
    * @param {*} data Données à mettre à jour
    * @param {Boolean} [file=false] Si une image est envoyée, cette variable doit être définie sur `true`
    * @returns {Promise<Object>} Résultat de la mise à jour
    */
   update(teamID, data, file = false) {
      return this.api.put(`teams/${teamID}`, data, file)
   }

   /**
    * Ajoute un rôle à un utilisateur dans l'équipe
    * @method addRoleToUser
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.addRoleToUser('team_id', 'member_id', 'staff')
    *
    * @param {String} teamID
    * @param {String} memberID
    * @param {Array} role Allowed values: ['owner', 'president', 'vice president', 'staff', 'communication', 'esport director', 'manager', 'assistant manager', 'head coach', 'video analyst', 'mental coach']
    * @returns {Promise<Object>} Résultat de l'ajout
    */
   addRoleToUser(teamID, memberID, role) {
      return this.api.post(`teams/${teamID}/members/${memberID}/roles`, { role })
   }

   /**
    * Supprime un rôle à un utilisateur dans l'équipe
    * @method removeRoleToUser
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.removeRoleToUser('team_id', 'member_id', 'staff')
    *
    * @param {String} teamID
    * @param {String} memberID
    * @param {Array} role
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeRoleToUser(teamID, memberID, role) {
      return this.api.delete(`teams/${teamID}/members/${memberID}/roles`, { role })
   }

   /**
    * Remove user in a team
    * @method removeUser
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.removeUser('team_id', 'member_id')
    *
    * @param {String} teamID
    * @param {String} memberID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   removeUser(teamID, memberID) {
      return this.api.delete(`teams/${teamID}/members/${memberID}`)
   }

   /**
    * Met à jour les tags (game roles) d'un membre
    * @method updateMemberTags
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.updateMemberTags('team_id', 'member_id', 'main tank,main heal')
    *
    * @param {String} teamID
    * @param {String} memberID
    * @param {Array} gameRoles List of game roles with comma. Allowed values: ['main tank', 'off tank', 'dps hitscan', 'dps projectile', 'main heal', 'flex heal']. Example: 'main tank,main heal'
    * @returns {Promise<Object>} Résultat de la mise à jour
    */
   updateMemberTags(teamID, memberID, gameRoles) {
      return this.api.put(`teams/${teamID}/members/${memberID}/tags`, { gameRoles })
   }

   // ==== Invitations ====
   /**
    * Postule pour rejoindre une équipe
    * @method applyToJoin
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.applyToJoin('team_id')
    * @param {string} teamID
    * @returns {Promise<Object>}
    */
   applyToJoin(teamID) {
      return this.api.post(`teams/${teamID}/apply`)
   }

   /**
    * Invite un utilisateur via BattleNet Btag
    * @method inviteUserToJoin
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.inviteUserToJoin('team_id', 'Name#1234')
    * @param {string} teamID
    * @param {string} battlenetBtag
    * @returns {Promise<Object>}
    */
   inviteUserToJoin(teamID, battlenetBtag) {
      return this.api.post(`teams/${teamID}/invitations`, { battlenetBtag })
   }

   /**
    * Liste les invitations de l'équipe
    * @method listMemberInvitation
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.listMemberInvitation('team_id')
    * @param {string} teamID
    * @returns {Promise<Object[]>}
    */
   listMemberInvitation(teamID) {
      return this.api.get(`teams/${teamID}/invitations`)
   }

   // ==== Lineup ====
   /**
    * Crée une lineup
    * @method createLineup
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.createLineup('team_id', 'Lineup Name', ['user1', 'user2'], ['sub1'])
    * @param {string} teamID
    * @param {string} name
    * @param {string[]} usersID
    * @param {string[]} [substitutesID=[]]
    * @returns {Promise<Object>}
    */
   createLineup(teamID, name, usersID, substitutesID = []) {
      if (!(usersID instanceof Array) || !(substitutesID instanceof Array)) {
         throw 'API : Les users ID fournis doivent etre dans un Array'
      }

      return this.api.post(`teams/${teamID}/lineups`, {
         name,
         usersID: usersID.join(','),
         substitutesID: substitutesID.length ? substitutesID.join(',') : '',
      })
   }

   /**
    * Liste les lineups
    * @method listLineups
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.listLineups('team_id')
    * @param {string} teamID
    * @returns {Promise<Object[]>}
    */
   listLineups(teamID) {
      const urlAdd = teamID ? `?${this.api.jsonToFormUrlEncoder({ teamID })}` : ''
      return this.api.get(`lineups${urlAdd}`)
   }

   // ==== Actu ====
   /**
    * Historique public d'une équipe
    * @method getPublicActus
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.getPublicActus('team_id')
    *
    * @param {String} teamID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste d'activités
    */
   getPublicActus(teamID) {
      return this.api.get(`teams/${teamID}/histories`)
   }

   /**
    * Get a team stats
    * @method getStats
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.getStats('team_id')
    * @param {String} teamID => Id of team
    * @returns {Promise<Object>} Stats
    */
   getStats(teamID) {
      return this.api.get(`teams/${teamID}/stats`)
   }

   /**
    * Follow a team
    * @method follow
    * @memberof ApiTeam
    * @instance
    * @example OlympeApi.teams.follow('team_id')
    * @param {String} teamID => Id of team
    * @returns {Promise<Object>}
    */
   follow(teamID) {
      return this.api.post(`teams/${teamID}/follow`)
   }
   /**
    * Unfollow a team
    * @method unfollow
    * @memberof ApiTeam
    * @instance
    * @param {String} teamID
    * @returns {Promise<Object>}
    */
   unfollow(teamID) {
      return this.api.delete(`teams/${teamID}/follow`)
   }

   /**
    * Add a member to a team (Admin)
    * @method addMember
    * @memberof ApiTeam
    * @instance
    * @param {String} teamID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   addMember(teamID, data) {
      return this.api.post(`teams/${teamID}/members`, data)
   }

   /**
    * Assign a ticket to a team
    * @method assignTicket
    * @memberof ApiTeam
    * @instance
    * @param {String} teamID
    * @param {String} ticketsPurchasedID
    * @returns {Promise<Object>}
    */
   assignTicket(teamID, ticketsPurchasedID) {
      return this.api.post(`teams/${teamID}/ticketspurchased/${ticketsPurchasedID}`)
   }

   /**
    * List tickets assigned to a team
    * @method listTickets
    * @memberof ApiTeam
    * @instance
    * @param {String} teamID
    * @returns {Promise<Object[]>}
    */
   listTickets(teamID) {
      return this.api.get(`teams/${teamID}/ticketspurchased`)
   }

   /**
    * Unassign a ticket from a team
    * @method unassignTicket
    * @memberof ApiTeam
    * @instance
    * @param {String} teamID
    * @param {String} ticketsPurchasedID
    * @returns {Promise<Object>}
    */
   unassignTicket(teamID, ticketsPurchasedID) {
      return this.api.delete(`teams/${teamID}/ticketspurchased/${ticketsPurchasedID}`)
   }

   /**
    * Delete a lineup
    * @method deleteLineup
    * @memberof ApiTeam
    * @instance
    * @param {String} lineupID
    * @returns {Promise<Object>}
    */
   deleteLineup(lineupID) {
      return this.api.delete(`lineups/${lineupID}`)
   }

   /**
    * Get a lineup
    * @method getLineup
    * @memberof ApiTeam
    * @instance
    * @param {String} lineupID
    * @returns {Promise<Object>}
    */
   getLineup(lineupID) {
      return this.api.get(`lineups/${lineupID}`)
   }

   /**
    * Update a lineup
    * @method updateLineup
    * @memberof ApiTeam
    * @instance
    * @param {String} lineupID
    * @param {Object} data
    * @returns {Promise<Object>}
    */
   updateLineup(lineupID, data) {
      return this.api.put(`lineups/${lineupID}`, data)
   }
}


