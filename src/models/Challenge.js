/**
 * @category Data Models
 * @description Represents a Challenge (Tournament/Competition) in the Olympe API.
 * @hideconstructor
 */
class Challenge {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);

        const Team = require('./Team');

        /**
         * @type {number}
         * @description ID of the Challenge
         */
        this.id = data.id;

        /**
         * @type {string}
         * @description Name of the Challenge
         */
        this.name = data.name;

        /**
         * @type {object}
         * @description Format of the Challenge
         */
        this.format = data.format;

        /**
         * @type {number}
         * @description Number of teams/players
         */
        this.size = data.size;

        /**
         * @type {number}
         * @description Status of the Challenge
         */
        this.status = data.status;

        /**
         * @type {string}
         * @description Start date of the Challenge
         */
        this.date = data.date;

        /**
         * @type {boolean}
         * @description Subscription status
         */
        this.subscription = data.subscription;

        /**
         * @type {string}
         * @description Logo URL
         */
        this.logo = data.logo;

        /**
         * @type {string}
         * @description Cover URL (banner)
         */
        this.cover = data.cover;
    }
}

module.exports = Challenge;
