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
    * Récupère une équipe
    *
    * @param {String} teamID Id of team
    * @param {Object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {['thirdpartiesDiscord' | 'battlenetBtag' | 'email']} [fields.userFields]
    * @returns {Promise<Object>} Équipe
    */
   get(teamID, fields) {
      return this.api.get(`teams/${teamID}${this.api.getFields(fields)}`).then((data) => team(data))
   }

   /**
    * Liste des teams
    * @returns {Promise<Object[]>} Liste des équipes
    */
   list() {
      return this.api.get('teams').then((list) => list.map((data) => team(data)))
   }

   // ==== Manage team ====
   /**
    * Create team
    *
    * @param {String} name
    * @param {String} nationality
    *
    * @returns {Promise<Object>} Team created
    */
   create(name, nationality) {
      return this.api.post('teams', { name, nationality }).then((data) => team(data))
   }

   /**
    * Delete team
    *
    * @param {String} teamID
    * @returns {Promise<Object>} Résultat de la suppression
    */
   delete(teamID) {
      return this.api.delete(`teams/${teamID}`)
   }

   /**
    * Mettre à jour les liens des réseaux sociaux
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
    * @param {string} teamID
    * @returns {Promise<Object>}
    */
   applyToJoin(teamID) {
      return this.api.post(`teams/${teamID}/apply`)
   }

   /**
    * Invite un utilisateur via BattleNet Btag
    * @param {string} teamID
    * @param {string} battlenetBtag
    * @returns {Promise<Object>}
    */
   inviteUserToJoin(teamID, battlenetBtag) {
      return this.api.post(`teams/${teamID}/invitations`, { battlenetBtag })
   }

   /**
    * Liste les invitations de l'équipe
    * @param {string} teamID
    * @returns {Promise<Object[]>}
    */
   listMemberInvitation(teamID) {
      return this.api.get(`teams/${teamID}/invitations`)
   }

   // ==== Lineup ====
   /**
    * Crée une lineup
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
    *
    * @param {String} teamID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste d'activités
    */
   getPublicActus(teamID) {
      return this.api.get(`teams/${teamID}/histories`)
   }

   /**
    * Get a team stats
    * @param {String} teamID => Id of team
    * @returns {Promise<Object>} Stats
    */
   getStats(teamID) {
      return this.api.get(`teams/${teamID}/stats`)
   }

   /**
    * Follow a team
    * @param {String} teamID => Id of team
    * @returns {Promise<Object>}
    */
   follow(teamID) {
      return this.api.post(`teams/${teamID}/follow`)
   }
}


