const ApiRoute = require('../ApiRoute.js')


module.exports = class ApiDiscord extends ApiRoute {
   /**
    * Récupère l'URL d'authentification Discord
    * @returns {Promise<Object>} URL d'authentification
    */
   getDiscordAuthUrl() {
      return this.api.get('html/auth/discord/start')
   }
}


