const ApiRoute = require('../ApiRoute.js');

const user = (data) => ({ ...data, username: data.username || 'No username' });

/**
 * Différentes méthodes associées aux routes de l'api
 * @class ApiUser
 */
module.exports = class ApiUser extends ApiRoute {

   /**
    * Get user data by id
    * @method get
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.get('user_id')
    *
    * @param {String} id
    * @param {Object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {Array<('thirdpartiesDiscord' | 'battlenetBtag' | 'email')>} [fields.fields]
    *
    * @returns {Promise<Object>} Renvoie un objet d'utilisateur
    */
   get(id, fields) {
      return this.api.get(`users/${id}${this.api.getFields(fields)}`).then((data) => user(data))
   }

   /**
    * Recuperer les données utilisateurs en mode administrateur (ne contient pas les donnée de teams)
    * @method search
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.search('user_id')
    * @param {String} id
    * @returns {Promise<Object>}
    */
   search(id) {
      return this.api.post(
         'users/search-deprecated-bot-suissard?fields=thirdpartiesDiscord%2CcastUrl',
         {
            search: id,
         }
      );
   }

   /**
    * Route accessible uniquement par l'utilisateur en question.
    * Feed personnalisé contenant l'historique de l'utilisateur (public+private) + de ses teams (public+team_only)
    * @method getPrivateActus
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.getPrivateActus('user_id')
    *
    * @param {String} userID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste d'activités
    */
   getPrivateActus(userID) {
      return this.api.get(`users/${userID}/feed`)
   }

   /**
    * Historique publique d'un utilisateur
    * @method getPublicActus
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.getPublicActus('user_id')
    *
    * @param {String} userID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste d'activités
    */
   // Non utilisé
   getPublicActus(userID) {
      return this.api.get(`users/${userID}/histories`)
   }

   /**
    * Liste des invitations à rejoindre une équipe pour un utilisateur
    * @method listInvitationsToJoinTeam
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.listInvitationsToJoinTeam('user_id')
    * 
    * @param {String} userID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste des invitations
    */
   listInvitationsToJoinTeam(userID) {
      return this.api.get(`users/${userID}/teams/invitations`)
   }

   /**
    * Met à jour les liens externes d'un utilisateur
    * @method putExternalLinks
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.putExternalLinks('user_id', { twitter: 'url' })
    *
    * @param {String} userId Identifiant de l'utilisateur
    * @param {Object} data Données des liens externes
    * @returns {Promise<Object>} Utilisateur mis à jour
    */
   putExternalLinks(userId, data) {
      return this.api.put(`users/${userId}/external-links`, data);
   }

   /**
    * Met à jour les informations d'un utilisateur
    * @method update
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.update('user_id', { name: 'New Name' })
    *
    * @param {String} id UserID
    * @param {Object} data Data to Update (ex : name=toto)
    * @param {boolean} [file=false] Si le body est un fichier
    * @returns {Promise<Object>} Utilisateur mis à jour
    */
   update(id, data, file = false) {
      return this.api.put(`users/${id}`, data, file);
   }
}


