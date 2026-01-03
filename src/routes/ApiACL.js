const ApiRoute = require('../ApiRoute.js');

/**
 * Methods for ACL routes
 * @class ApiACL
 */
module.exports = class ApiACL extends ApiRoute {
    /**
     * Delete an ACL
     * @method delete
     * @memberof ApiACL
     * @instance
     * @param {string} idACL
     * @returns {Promise<any>}
     */
    delete(idACL) {
        return this.api.delete(`acl/${idACL}`);
    }

    /**
     * Get all ACLs
     * @method list
     * @memberof ApiACL
     * @instance
     * @returns {Promise<any>}
     */
    list() {
        return this.api.get(`acl`);
    }

    /**
     * Create an ACL
     * @method create
     * @memberof ApiACL
     * @instance
     * @param {object} data
     * @returns {Promise<any>}
     */
    create(data) {
        return this.api.post(`acl`, data);
    }
}
