const ApiRoute = require('../ApiRoute.js');

/**
 * Différentes méthodes associées aux routes de l'api
 * @namespace ApiChallengesGroups
 */
module.exports = class ApiChallengesGroups extends ApiRoute {
    /**
     * Delete a Challenge Group
     * @method delete
     * @memberof ApiChallengesGroups
     * @instance
     * @param {string} id
     * @returns {Promise<any>}
     */
    delete(id) {
        return this.api.delete(`challengesgroups/${id}`);
    }

    /**
     * List Challenge Groups
     * @method list
     * @memberof ApiChallengesGroups
     * @instance
     * @returns {Promise<any>}
     */
    list() {
        return this.api.get(`challengesgroups`);
    }

    /**
     * Create a Challenge Group
     * @method create
     * @memberof ApiChallengesGroups
     * @instance
     * @param {object} data
     * @returns {Promise<any>}
     */
    create(data) {
        return this.api.post(`challengesgroups`, data);
    }

    /**
     * Update a Challenge Group
     * @method update
     * @memberof ApiChallengesGroups
     * @instance
     * @param {string} id
     * @param {object} data
     * @returns {Promise<any>}
     */
    update(id, data) {
        return this.api.put(`challengesgroups/${id}`, data);
    }
}
