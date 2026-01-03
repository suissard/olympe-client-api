/**
 * @class Challenge
 * @description Represents a Challenge (Tournament/Competition) in the Olympe API.
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
         * @type {string}
         * @description Main language
         */
        this.language = data.language;

        /**
         * @type {string}
         * @description Link to the competition rules. Can by empty.
         */
        this.challengeRulesURL = data.challengeRulesURL;

        /**
         * @type {object}
         * @description Object containing additional data like teams
         */
        this.object = data.object ? {
             ...data.object,
             teams: data.object.teams?.map(t => new Team(t))
        } : undefined;
    }
}

module.exports = Challenge;
