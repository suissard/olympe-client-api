const ApiRoute = require('../ApiRoute.js');

const user = (data) => ({ ...data, username: data.username || 'No username' });

/**
 * Différentes méthodes associées aux routes de l'api
 */
module.exports = class ApiUser extends ApiRoute {
   /**
    * Get user data by id
    *
    * @param {String} id
    * @param {Object} fields Fields permettant de récupérer des clés précises de l'objet user
    * @param {['thirdpartiesDiscord' | 'battlenetBtag' | 'email']} fields.fields
    *
    * @returns {Object} Renvoie un objet d'utilisateur
    */
   get(id, fields) {
      return this.api.get(`users/${id}${this.api.getFields(fields)}`).then((data) => user(data))
   }

   /**
    * Route accessible uniquement par l'utilisateur en question.
    * Feed personnalisé contenant l'historique de l'utilisateur (public+private) + de ses teams (public+team_only)
    *
    * @param {String} userID Identifiant de l'utilisateur
    */
   getPrivateActus(userID) {
      return this.api.get(`users/${userID}/feed`)
   }

   /**
    * Historique publique d'un utilisateur
    *
    * @param {String} userID Identifiant de l'utilisateur
    */
   // Non utilisé
   getPublicActus(userID) {
      return this.api.get(`users/${userID}/histories`)
   }

   listInvitationsToJoinTeam(userID) {
      return this.api.get(`users/${userID}/teams/invitations`)
   }

   /**
    *
    * @param {String} userId
    * @param {Object} data
    * @returns
    */
   putExternalLinks(userId, data) {
      return this.api.put(`users/${userId}/external-links`, data);
   }

   /**
    *
    * @param {String} id UserID
    * @param {Object} data Data to Update (ex : name=toto)
    */
   update(id, data, file = false) {
      return this.api.put(`users/${id}`, data, file);
   }
}


