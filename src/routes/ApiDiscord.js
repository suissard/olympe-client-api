import ApiRoute from '../ApiRoute.js'


export default class ApiDiscord extends ApiRoute {
   getDiscordAuthUrl() {
      return this.api.GET('html/auth/discord/start')
   }
}


