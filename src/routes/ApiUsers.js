const ApiRoute = require('../ApiRoute.js');
const UserModel = require('../models/User');

/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiUser
 */
module.exports = class ApiUser extends ApiRoute {

   /**
    * Get user data by id
    * @method get
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.get('user_id')
    *
    * @param {string} id
    * @param {object} [fields] Fields permettant de récupérer des clés précises de l'objet user
    * @param {Array<('thirdpartiesDiscord' | 'battlenetBtag' | 'email')>} [fields.fields]
    *
    * @returns {Promise<User>} Renvoie un objet d'utilisateur
    */
   get(id, fields) {
      return this.api.get(`users/${id}${this.api.getFields(fields)}`).then((data) => new UserModel(data))
   }

   /**
    * Recuperer les données utilisateurs en mode administrateur (ne contient pas les donnée de teams)
    * @method search
    * @memberof ApiUser
    * @instance
    * @deprecated Cette fonction va rapidement devenir obsolete, ne pas trop se baser dessus.
    * @example OlympeApi.users.search('user_id')
    * @param {string} id
    * @returns {Promise<User>}
    */
   search(id) {
      return this.api.post(
         'users/search-deprecated-bot-suissard?fields=thirdpartiesDiscord%2CcastUrl',
         {
            search: id,
         }
      ).then(data => new UserModel(data));
   }

   /**
    * Route accessible uniquement par l'utilisateur en question.
    * Feed personnalisé contenant l'historique de l'utilisateur (public+private) + de ses teams (public+team_only)
    * @method getPrivateActus
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.getPrivateActus('user_id')
    *
    * @param {string} userID Identifiant de l'utilisateur
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
    * @param {string} userID Identifiant de l'utilisateur
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
    * @param {string} userID Identifiant de l'utilisateur
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
    * @param {string} userId Identifiant de l'utilisateur
    * @param {object} data Données des liens externes
    * @returns {Promise<User>} Utilisateur mis à jour
    */
   putExternalLinks(userId, data) {
      return this.api.put(`users/${userId}/external-links`, data).then(data => new UserModel(data));
   }

   /**
    * Met à jour les informations d'un utilisateur
    * @method update
    * @memberof ApiUser
    * @instance
    * @example OlympeApi.users.update('user_id', { name: 'New Name' })
    *
    * @param {string} id UserID
    * @param {object} data Data to Update (ex : name=toto)
    * @param {boolean} [file=false] Si le body est un fichier
    * @returns {Promise<User>} Utilisateur mis à jour
    */
   update(id, data, file = false) {
      return this.api.put(`users/${id}`, data, file).then(data => new UserModel(data));
   }
   /**
    * Supprimer l'image de profil
    * @method deleteProfileAsset
    * @memberof ApiUser
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   deleteProfileAsset(id) {
      return this.api.delete(`users/${id}/assets/profile`)
   }

   /**
    * Suivre un utilisateur
    * @method follow
    * @memberof ApiUser
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   follow(id) {
      return this.api.post(`users/${id}/follow`)
   }

   /**
    * Ne plus suivre un utilisateur
    * @method unfollow
    * @memberof ApiUser
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   unfollow(id) {
      return this.api.delete(`users/${id}/follow`)
   }

   /**
    * Obtenir les statistiques d'un utilisateur
    * @method getStats
    * @memberof ApiUser
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   getStats(id) {
      return this.api.get(`users/${id}/stats`)
   }

   /**
    * Obtenir le fil d'actualité global
    * @method getFeed
    * @memberof ApiUser
    * @instance
    * @returns {Promise<any>}
    */
   getFeed() {
      return this.api.get(`feed`)
   }
}


