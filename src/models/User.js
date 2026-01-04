/**
 * @category Data Models
 * @description Represents a User in the Olympe API.
 * @hideconstructor
 */
class User {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);

        const Team = require('./Team');

        /**
         * @type {string}
         * @description ID of the User, username format: username#1234 or username-1234
         */
        this.id = data.id;

        /**
         * @type {boolean}
         * @description 1 if public, 0 if private
         */
        this.publicEmail = data.publicEmail;

        /**
         * @type {boolean}
         * @description true if email is validated
         */
        this.emailValidated = data.emailValidated;

        /**
         * @type {boolean}
         * @description 1 if user has accepted to received commercial notifications
         */
        this.emailAllowCommercialUsage = data.emailAllowCommercialUsage;

        /**
         * @type {boolean}
         * @description 1 if public, 0 if private
         */
        this.publicBattlenetBtag = data.publicBattlenetBtag;

        /**
         * @type {string}
         * @description Username
         */
        this.username = data.username;

        /**
         * @type {string}
         * @description Nationality
         */
        this.nationality = data.nationality;

        /**
         * @type {boolean}
         * @description The user is open to transfer proposals
         */
        this.marketplaceTransfer = data.marketplaceTransfer;

        /**
         * @type {boolean}
         * @description The user is open to loan proposals
         */
        this.marketplaceLent = data.marketplaceLent;

        /**
         * @type {number}
         * @description Registration date of the User
         */
        this.registerDate = data.registerDate;

        /**
         * @type {object[]}
         * @description List of team where user is present. Team roles are included
         */
        this.teams = data.teams?.map(t => new Team(t));

        /**
         * @type {object[]}
         * @description List of team where user is lent. Team roles are included
         */
        this.teamsLent = data.teamsLent?.map(t => new Team(t));

        /**
         * @type {string[]}
         * @description List of current organization roles for admin user
         */
        this.organizationRoles = data.organizationRoles;

        /**
         * @type {object}
         * @description Thirdparties linked accounts (discord, battlenet, etc.)
         */
        this.thirdparties = data.thirdparties;

        /**
         * @type {object}
         * @description Followers info
         */
        this.followers = data.followers;

        /**
         * @type {object}
         * @description Subscription info
         */
        this.subscriptions = data.subscriptions;

        /**
         * @type {string|undefined}
         * @description Email address (Only if specified in 'fields' query parameter)
         */
        this.email = data.email;

        /**
         * @type {string|undefined}
         * @description Battlenet Battletag (Only if specified in 'fields' query parameter)
         */
        this.battlenetBtag = data.battlenetBtag;

        /**
         * @type {object|undefined}
         * @description External links (Only if specified in 'fields' query parameter)
         */
        this.externalLinks = data.externalLinks;

        /**
         * @type {string|undefined}
         * @description Streaming link like a Twitch page (Only if specified in 'fields' query parameter)
         */
        this.castUrl = data.castUrl;
    }
}

module.exports = User;
