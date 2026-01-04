const ApiRoute = require('../ApiRoute.js')


/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiDiscord
 */
module.exports = class ApiDiscord extends ApiRoute {
   /**
    * Récupère l'URL d'authentification Discord
    * @method getDiscordAuthUrl
    * @memberof ApiDiscord
    * @instance
    * @example OlympeApi.discord.getDiscordAuthUrl()
    * @returns {Promise<Object>} URL d'authentification
    */
   getDiscordAuthUrl() {
      return this.api.get('html/auth/discord/start')
   }
}


