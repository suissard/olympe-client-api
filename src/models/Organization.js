/**
 * @category Data Models
 * @description Represents an Organization in the Olympe API.
 * @hideconstructor
 */
class Organization {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);
        /**
         * @type {number}
         * @description ID of the Organization
         */
        this.id = data.id;

        /**
         * @type {string}
         * @description Domain name
         */
        this.domain = data.domain;

        /**
         * @type {string}
         * @description Alternative domain
         */
        this.secondaryDomain = data.secondaryDomain;

        /**
         * @type {string}
         * @description Name of the Organization
         */
        this.name = data.name;

        /**
         * @type {object}
         * @description Game object
         */
        this.game = data.game;

        /**
         * @type {object}
         * @description ExternalLinks object
         */
        this.externalLinks = data.externalLinks;

        /**
         * @type {number}
         * @description Registration date of the Organization
         */
        this.registerDate = data.registerDate;

        // Settings (subset)
        this.todo = data.todo;
        this.numberOfTeamsPerUser = data.numberOfTeamsPerUser;
        this.minMembersPerTeam = data.minMembersPerTeam;
        this.maxMembersPerTeam = data.maxMembersPerTeam;
        this.maxPlayersPerTeam = data.maxPlayersPerTeam;
        this.paypalBusinessID = data.paypalBusinessID;

        // Marketplace settings
        this.marketplaceLentDurationDays = data.marketplaceLentDurationDays;
        this.marketplaceShowUsersWithoutTeam = data.marketplaceShowUsersWithoutTeam;
        this.marketplaceShowTicketsWithActiveStepOnly = data.marketplaceShowTicketsWithActiveStepOnly;
        this.marketplaceLentEnabled = data.marketplaceLentEnabled;
        this.marketplaceTransferEnabled = data.marketplaceTransferEnabled;

        /**
         * @type {object}
         * @description Required thirdparty integrations for players
         */
        this.thirdpartiesRequired = data.thirdpartiesRequired;

        /**
         * @type {number}
         * @description Players in this organization must sync phone number
         */
        this.requiredPhone = data.requiredPhone;
    }
}

module.exports = Organization;
