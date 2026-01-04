/**
 * @category Data Models
 * @description Represents a Ticket in the Olympe API.
 */
class Ticket {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);
        /**
         * @type {number}
         * @description ID of the Ticket
         */
        this.id = data.id;

        /**
         * @type {number}
         * @description ID of the Challenge
         */
        this.challengeID = data.challengeID;

        /**
         * @type {number[]}
         * @description Array of Step ID
         */
        this.stepsID = data.stepsID;

        /**
         * @type {string}
         * @description Name of the Ticket
         */
        this.name = data.name;

        /**
         * @type {number}
         * @description Price of the Ticket
         */
        this.price = data.price;

        /**
         * @type {number}
         * @description Timestamp: user cannot buy ticket before this date
         */
        this.startDate = data.startDate;

        /**
         * @type {number}
         * @description Timestamp: after this date, validated team (have enough members) can't buy this ticket
         */
        this.expirationDateTeamValidated = data.expirationDateTeamValidated;

        /**
         * @type {number}
         * @description Timestamp: after this date, not validated team (not have enough members) can't buy this ticket
         */
        this.expirationDateTeamNotValidated = data.expirationDateTeamNotValidated;

        /**
         * @type {number}
         * @description How many time this ticket can be purchased by the same user (-1 = unlimited)
         */
        this.multiplePurchaseLimit = data.multiplePurchaseLimit;
    }
}

module.exports = Ticket;
