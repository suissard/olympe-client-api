/**
 * @class Pool
 * @description Represents a Pool in the Olympe API.
 */
class Pool {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);

        const Team = require('./Team');

        /**
         * @type {number}
         * @description ID of the Pool
         */
        this.id = data.id;

        /**
         * @type {number}
         * @description ID of the Challenge
         */
        this.challengeID = data.challengeID;

        /**
         * @type {number}
         * @description ID of the Segment
         */
        this.segmentID = data.segmentID;

        /**
         * @type {number[]}
         * @description List of stepsID
         */
        this.stepsID = data.stepsID;

        /**
         * @type {string}
         * @description Pool name
         */
        this.name = data.name;

        /**
         * @type {object}
         * @description poolConfigs object
         */
        this.poolConfigs = data.poolConfigs;

        /**
         * @type {object}
         * @description Stats object
         */
        this.stats = data.stats;

        /**
         * @type {string}
         * @description Format
         */
        this.format = data.format;

        /**
         * @type {object}
         * @description Format values
         */
        this.formatValues = data.formatValues;

        /**
         * @type {number}
         * @description Number of players per score
         */
        this.numberOfPlayersPerScore = data.numberOfPlayersPerScore;

        /**
         * @type {object[]}
         * @description List of TeamPoints
         */
        this.items = data.items?.map(item => ({
             ...item,
             team: item.team ? new Team(item.team) : undefined
        }));
    }
}

module.exports = Pool;
