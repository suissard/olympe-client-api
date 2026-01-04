const ApiRoute = require('../ApiRoute.js');

/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiBrackets
 */
module.exports = class ApiBrackets extends ApiRoute {
    /**
     * Delete a Bracket
     * @method delete
     * @memberof ApiBrackets
     * @instance
     * @param {string} idBracket
     * @returns {Promise<any>}
     */
    delete(idBracket) {
        return this.api.delete(`brackets / ${idBracket} `);
    }

    /**
     * Delete a Bracket Config
     * @method deleteConfig
     * @memberof ApiBrackets
     * @instance
     * @param {string} id
     * @returns {Promise<any>}
     */
    deleteConfig(id) {
        return this.api.delete(`bracketsconfigs / ${id} `);
    }

    /**
     * Get a Bracket
     * @method get
     * @memberof ApiBrackets
     * @instance
     * @param {string} idBracket
     * @returns {Promise<any>}
     */
    get(idBracket) {
        return this.api.get(`brackets / ${idBracket} `);
    }

    /**
     * Get a Bracket Config
     * @method getConfig
     * @memberof ApiBrackets
     * @instance
     * @param {string} id
     * @returns {Promise<any>}
     */
    getConfig(id) {
        return this.api.get(`bracketsconfigs / ${id} `);
    }

    /**
     * Get Bracket Ranking
     * @method getRanking
     * @memberof ApiBrackets
     * @instance
     * @param {string} idBracket
     * @returns {Promise<any>}
     */
    getRanking(idBracket) {
        return this.api.get(`brackets / ${idBracket}/ranking`);
    }

    /**
     * Get Bracket Teams
     * @method getTeams
     * @memberof ApiBrackets
     * @instance
     * @param {string} idBracket
     * @returns {Promise<any>}
     */
    getTeams(idBracket) {
        return this.api.get(`brackets/${idBracket}/teams`);
    }

    /**
     * Get Available Teams for Bracket
     * @method getTeamsAvailable
     * @memberof ApiBrackets
     * @instance
     * @param {string} idBracket
     * @returns {Promise<any>}
     */
    getTeamsAvailable(idBracket) {
        return this.api.get(`brackets/${idBracket}/teams/available`);
    }

    /**
     * List Brackets by Challenge
     * @method listByChallenge
     * @memberof ApiBrackets
     * @instance
     * @param {string} idChallenge
     * @returns {Promise<any>}
     */
    listByChallenge(idChallenge) {
        return this.api.get(`challenges/${idChallenge}/brackets`);
    }

    /**
     * List Bracket Configs by Challenge
     * @method listConfigsByChallenge
     * @memberof ApiBrackets
     * @instance
     * @param {string} idChallenge
     * @returns {Promise<any>}
     */
    listConfigsByChallenge(idChallenge) {
        return this.api.get(`challenges/${idChallenge}/bracketsconfigs`);
    }

    /**
     * Create a Bracket
     * @method create
     * @memberof ApiBrackets
     * @instance
     * @param {string} idChallenge
     * @param {object} data
     * @returns {Promise<any>}
     */
    create(idChallenge, data) {
        return this.api.post(`challenges/${idChallenge}/brackets`, data);
    }

    /**
     * Create a Bracket Config
     * @method createConfig
     * @memberof ApiBrackets
     * @instance
     * @param {string} idChallenge
     * @param {object} data
     * @returns {Promise<any>}
     */
    createConfig(idChallenge, data) {
        return this.api.post(`challenges/${idChallenge}/bracketsconfigs`, data);
    }

    /**
     * Post Teams to Bracket
     * @method addTeam
     * @memberof ApiBrackets
     * @instance
     * @param {string} idBracket
     * @param {object} data
     * @returns {Promise<any>}
     */
    addTeam(idBracket, data) {
        return this.api.post(`brackets/${idBracket}/teams`, data);
    }

    /**
     * Update a Bracket
     * @method update
     * @memberof ApiBrackets
     * @instance
     * @param {string} id
     * @param {object} data
     * @returns {Promise<any>}
     */
    update(id, data) {
        return this.api.put(`brackets/${id}`, data);
    }

    /**
     * Update a Bracket Config
     * @method updateConfig
     * @memberof ApiBrackets
     * @instance
     * @param {string} id
     * @param {object} data
     * @returns {Promise<any>}
     */
    updateConfig(id, data) {
        return this.api.put(`bracketsconfigs/${id}`, data);
    }
}
