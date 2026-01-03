/**
 * Configuration for Organic Tests
 * 
 * Please fill in the values below with real data from the Olympe API.
 * This file is used by src/olympeApi.organic.test.js to run tests against the real API.
 */
module.exports = {
    // API Configuration

    token: "x+bKxqKBkoPJ07QH/y/jGMtZw8rLVC6Fi1F7WaTQ4mQoSN58zpMH+0Vei50FmsQwOvwwW2cJ4YvbsKHOhq6RVcMRnTP6k/QsNLyC2XA5yvDRHsxFuI4/9QGYP2ZSTWRZtjK+wgA55mfGftRCpPiDq0L+xagXJhAVQR6wql8nVJ0=",
    domain: "prod.api.olympe.xyz", // Or your dev domain
    xDomain: "www.playallforone.com", // Or your dev domain
    protocol: "https",

    // IDs for testing specific routes
    ids: {
        userId: "USER_ID_HERE", // A valid user ID
        challengeId: 1, // A valid challenge ID (number)
        poolId: 1, // A valid pool ID (number)
        segmentId: 1, // A valid segment ID (number)
        stepId: 1, // A valid step ID (number)
        teamId: "TEAM_ID_HERE", // A valid team ID
        teamId2: "TEAM_ID_2_HERE", // Another team ID (for transfers/invites)
        matchId: "MATCH_ID_HERE", // A valid match ID
        ticketId: 1, // A valid ticket ID (number)
        invitationId: 1, // A valid invitation ID (number)
        organizationId: "ORG_ID_HERE", // A valid organization ID
        lineupId: 1, // A valid lineup ID (number)
        dateId: 1, // A valid date ID for match scheduling
    },

    // Payload data for POST/PUT requests
    payloads: {
        teamCreate: {
            name: "Test Organic Team",
            nationality: "FR"
        },
        teamUpdate: {
            name: "Test Organic Team Updated"
        },
        matchSchedule: {
            date: new Date().toISOString()
        },
        score: {
            scores: [{ "team1": 1, "team2": 0 }] // Example score structure
        },
        invitation: {
            invitationType: 'lent',
            userIDSource: "USER_ID_HERE",
            teamIDSource: "TEAM_ID_HERE",
            teamIDDest: "TEAM_ID_2_HERE",
            challengeID: 1,
            lentExpirationDate: Date.now() + 86400000
        }
    }
};
