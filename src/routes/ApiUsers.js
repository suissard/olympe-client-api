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
   /**
    * Get user data by id
    *
    * @param {String} id
    * @param {Object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {['thirdpartiesDiscord' | 'battlenetBtag' | 'email']} [fields.fields]
    *
    * @returns {Promise<Object>} Renvoie un objet d'utilisateur
    */
   get(id, fields) {
      return this.api.get(`users/${id}${this.api.getFields(fields)}`).then((data) => user(data))
   }

   /**
    * Recuperer les données utilisateurs en mode administrateur (ne contient pas les donnée de teams)
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
    *
    * @param {String} userID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste d'activités
    */
   getPrivateActus(userID) {
      return this.api.get(`users/${userID}/feed`)
   }

   /**
    * Historique publique d'un utilisateur
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
    * 
    * @param {String} userID Identifiant de l'utilisateur
    * @returns {Promise<Object[]>} Liste des invitations
    */
   listInvitationsToJoinTeam(userID) {
      return this.api.get(`users/${userID}/teams/invitations`)
   }

   /**
    * Met à jour les liens externes d'un utilisateur
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


