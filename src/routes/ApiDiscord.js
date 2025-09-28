const ApiRoute = require('../ApiRoute.js')


module.exports = class ApiDiscord extends ApiRoute {
   getDiscordAuthUrl() {
      return this.api.get('html/auth/discord/start')
   }
}


