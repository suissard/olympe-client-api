const ApiRoute = require('../ApiRoute.js')
const ChallengeModel = require('../models/Challenge');


/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiChallenge
 */
module.exports = class ApiChallenge extends ApiRoute {
   /**
    * Liste des challenges
    * @method list
    * @memberof ApiChallenge
    * @instance
    * @example OlympeApi.challenges.list(true)
    * @param {boolean} [active] Récupérer uniquement les challenges actifs
    * @returns {Promise<Challenge[]>} Liste des challenges
    */
   list(active) {
      const urlAdd = active ? `?${this.api.jsonToFormUrlEncoder({ active: 'true' })}` : ''

      return this.api.get(`challenges${urlAdd}`).then((data) => {
         if (data && data.length > 0) return data.map(d => new ChallengeModel(d))

         return []
      })
   }
   /**
    * Créer un challenge
    * @method create
    * @memberof ApiChallenge
    * @instance
    * @params {object} data
    * @returns {Promise<Challenge>} Challenge créé
    */
   create(data) {
      return this.api.post('challenges', data).then(data => new ChallengeModel(data))
   }

   /**
    * Récupérer un challenge
    * @method get
    * @memberof ApiChallenge
    * @instance
    * @param {string} id
    * @returns {Promise<Challenge>} Challenge
    */
   get(id) {
      return this.api.get(`challenges/${id}`).then(data => new ChallengeModel(data))
   }

   /**
    * Mettre à jour un challenge
    * @method update
    * @memberof ApiChallenge
    * @instance
    * @param {string} id
    * @param {object} data
    * @returns {Promise<Challenge>} Challenge mis à jour
    */
   update(id, data) {
      return this.api.put(`challenges/${id}`, data).then(data => new ChallengeModel(data))
   }

   /**
    * Supprimer un challenge
    * @method delete
    * @memberof ApiChallenge
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   delete(id) {
      return this.api.delete(`challenges/${id}`)
   }

   /**
    * Récupérer les configurations d'un challenge
    * @method getConfigs
    * @memberof ApiChallenge
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   getConfigs(id) {
      return this.api.get(`challenges/${id}/configs`)
   }

   /**
    * Mettre à jour les configurations d'un challenge
    * @method updateConfigs
    * @memberof ApiChallenge
    * @instance
    * @param {string} id
    * @param {object} data
    * @returns {Promise<any>}
    */
   updateConfigs(id, data) {
      return this.api.put(`challenges/${id}/configs`, data)
   }

   /**
    * Récupérer les participants d'un challenge
    * @method getParticipants
    * @memberof ApiChallenge
    * @instance
    * @param {string} id
    * @returns {Promise<any>}
    */
   getParticipants(id) {
      return this.api.get(`challenges/${id}/participants`)
   }
}

