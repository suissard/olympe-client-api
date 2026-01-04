/**
 * @class Team
 * @category Data Models
 * @description Represents a Team in the Olympe API.
 */
class Team {
    /**
     * @param {object} data - The raw data object from the API.
     */
    constructor(data) {
        Object.assign(this, data);

        // Lazy require to avoid circular dependency
        const User = require('./User');

        /**
         * @type {string}
         * @description ID of the Team
         */
        this.id = data.id;

        /**
         * @type {string}
         * @description Name of the Team
         */
        this.name = data.name;

        /**
         * @type {string}
         * @description Team nationality
         */
        this.nationality = data.nationality;

        /**
         * @type {number}
         * @description 1 = yes, 0 = no
         */
        this.recruitment = data.recruitment;

        /**
         * @type {number}
         * @description Registration date of the Team
         */
        this.registerDate = data.registerDate;

        /**
         * @type {object[]}
         * @description List of members including team roles, tags and ticket purchased for each member.
         */
        this.members = data.members?.map(member => ({
            ...member,
            username: member.username || 'No username',
            user: member.user ? new User({
                ...member.user,
                username: member.user.username || 'No username'
            }) : undefined
        }));

        /**
         * @type {object}
         * @description ExternalLinks object
         */
        this.externalLinks = data.externalLinks;

        /**
         * @type {object[]}
         * @description List of members lent to my team.
         */
        this.membersLent = data.membersLent;

        /**
         * @type {object[]}
         * @description List of segment object when the team have played
         */
        this.segments = data.segments;

        /**
         * @type {object}
         * @description Followers info
         */
        this.followers = data.followers;

        /**
         * @type {object|undefined}
         * @description PointsObj. See ranking pages for details.
         */
        this.points = data.points;
    }
}

module.exports = Team;
