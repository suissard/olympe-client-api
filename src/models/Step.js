/**
 * @category Data Models
 * @description Represents a Step (phase of a tournament) in the Olympe API.
 */
class Step {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);

        const Team = require('./Team');

        /**
         * @type {number}
         * @description ID of the Step
         */
        this.id = data.id;

        /**
         * @type {number}
         * @description ID of the Challenge
         */
        this.challengeID = data.challengeID;

        /**
         * @type {string}
         * @description Name of the Step
         */
        this.name = data.name;

        /**
         * @type {string}
         * @description Type of the Step (register, play, break, ..)
         */
        this.type = data.type;

        /**
         * @type {number}
         * @description Start unix timestamp
         */
        this.startDate = data.startDate;

        /**
         * @type {number}
         * @description End unix timestamp
         */
        this.endDate = data.endDate;

        /**
         * @type {object[]}
         * @description List of items (TeamPoints)
         */
        this.items = data.items?.map(item => ({
            ...item,
            team: item.team ? new Team(item.team) : undefined
        }));
    }
}

module.exports = Step;
