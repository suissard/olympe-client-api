

/**
 * Classe parente pour toutes les routes de l'API
 */
module.exports = class ApiRoute {
    /**
     * @param {OlympeApi} api Instance de la classe OlympeApi
     */
    constructor(api){
        this.api = api
    }
}