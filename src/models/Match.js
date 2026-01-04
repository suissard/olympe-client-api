/**
 * @category Data Models
 * @description Represents a Match in the Olympe API.
 */
class Match {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);

        const Team = require('./Team');

        /**
         * @type {number}
         * @description Match ID
         */
        this.id = data.id;

        /**
         * @type {number|null}
         * @description Timestamp or null: match date
         */
        this.matchDate = data.matchDate;

        /**
         * @type {object[]}
         * @description List of proposed matchDate
         */
        this.matchDateProposals = data.matchDateProposals;

        /**
         * @type {string|null}
         * @description ID of the winning team (Can be teamID_1, teamID_2 or null)
         */
        this.teamID_winner = data.teamID_winner;

        /**
         * @type {object}
         * @description Challenge object
         */
        this.challenge = data.challenge;

        /**
         * @type {object}
         * @description Pool object
         */
        this.pool = data.pool;

        /**
         * @type {object}
         * @description Segment object
         */
        this.segment = data.segment;

        /**
         * @type {object[]}
         * @description Step objects
         */
        this.steps = data.steps;

        /**
         * @type {object}
         * @description Team 1 object (includes score, lineup)
         */
        this.team1 = data.team1 ? new Team(data.team1) : undefined;

        /**
         * @type {object}
         * @description Team 2 object (includes score, lineup)
         */
        this.team2 = data.team2 ? new Team(data.team2) : undefined;

        /**
         * @type {object[]}
         * @description Score objects.
         */
        this.scores = data.scores;

        /**
         * @type {object[]}
         * @description Caster objects
         */
        this.casters = data.casters;

        /**
         * @type {object}
         * @description Next match info for winner
         */
        this.nextmatchWinner = data.nextmatchWinner;

        /**
         * @type {object}
         * @description Next match info for loser
         */
        this.nextmatchLoser = data.nextmatchLoser;

        /**
         * @type {number|undefined}
         * @description Only for bracket. Match round (first is round 1. Last round = final)
         */
        this.round = data.round;

        /**
         * @type {number|undefined}
         * @description Only for bracket. Each match have a position for a round.
         */
        this.position = data.position;

        /**
         * @type {number|undefined}
         * @description Only for bracket. 'winner' or 'loser'.
         */
        this.type = data.type;
    }
}

module.exports = Match;
