
import { describe, test, expect, beforeAll } from "vitest";
import OlympeApi from "./OlympeApi.js";
import config from "./organic-test-config.js";

// Helper to check if config is configured
const isConfigured = (key) => config[key] && config[key] !== "YOUR_API_TOKEN_HERE" && config[key] !== "USER_ID_HERE" && config[key] !== "TEAM_ID_HERE";
// Always skip for now as requested
const ifPayload = (key) => test.skip; 

describe("OlympeApi Organic Write Tests (Real API - POST/PUT/DELETE)", () => {
    let api;

    beforeAll(() => {
        if (!isConfigured('token')) {
            console.warn("Skipping organic tests: Token not configured in src/organic-test-config.js");
        }
        api = new OlympeApi(config.token, config.domain, config.xDomain || `www.${config.domain}`, config.protocol);
    });

    describe("Invitations", () => {
        ifPayload('reply')("reply to invitation", async () => {
            await expect(api.invitations.reply(config.ids.invitationId, 0)).resolves.toBeDefined();
        });
        
        ifPayload('remove')("remove invitation", async () => {
             await expect(api.invitations.remove(config.ids.invitationId)).resolves.toBeDefined();
        });
    });

    describe("MarketPlace", () => {
        ifPayload('invitation')("send invitation", async () => {
             // requires payload
             await expect(api.marketplace.sendInvit(config.payloads.invitation)).resolves.toBeDefined();
        });
    });

    describe("Matchs", () => {
        ifPayload('matchSchedule')("propose match schedule", async () => {
             await expect(api.matchs.proposeMatchSchedule(
                 config.ids.challengeId, 
                 config.ids.poolId, 
                 config.ids.teamId, 
                 config.ids.matchId, 
                 config.payloads.matchSchedule.date
             )).resolves.toBeDefined();
        });

        ifPayload('matchSchedule')("reply to match schedule", async () => {
             await expect(api.matchs.replyToMatchSchedule(config.ids.teamId, config.ids.matchId, config.ids.dateId, true)).resolves.toBeDefined();
        });

        ifPayload('matchSchedule')("remove scheduled match", async () => {
             await expect(api.matchs.removeScheduledMatch(config.ids.challengeId, config.ids.poolId, config.ids.teamId, config.ids.matchId)).resolves.toBeDefined();
        });
        
        ifPayload('score')("add a score", async () => {
             await expect(api.matchs.addAscore(config.ids.teamId, config.ids.matchId, config.payloads.score.scores)).resolves.toBeDefined();
        });

        ifPayload('score')("remove score", async () => {
             await expect(api.matchs.removeScore(config.ids.matchId)).resolves.toBeDefined();
        });
        
        ifPayload('cast')("assign caster", async () => {
             await expect(api.matchs.assignCaster(config.ids.matchId)).resolves.toBeDefined();
        });
        
        ifPayload('cast')("remove caster", async () => {
             await expect(api.matchs.removeCaster(config.ids.matchId)).resolves.toBeDefined();
        });

        ifPayload('lineup')("assign lineup", async () => {
             await expect(api.matchs.assignLineup(config.ids.matchId, config.ids.lineupId)).resolves.toBeDefined();
        });
    });

    describe("Teams", () => {
        ifPayload('teamCreate')("create team", async () => {
             const result = await api.teams.create(config.payloads.teamCreate.name, config.payloads.teamCreate.nationality);
             expect(result).toBeDefined();
        });
        
        ifPayload('teamUpdate')("update team", async () => {
             const result = await api.teams.update(config.ids.teamId, config.payloads.teamUpdate);
             expect(result).toBeDefined();
        });
        
        ifPayload('teamUpdate')("update external links", async () => {
             const result = await api.teams.putExternalLinks(config.ids.teamId, { website: "https://example.com" });
             expect(result).toBeDefined();
        });
        
        ifPayload('teamRole')("add role to user", async () => {
             await expect(api.teams.addRoleToUser(config.ids.teamId, config.ids.userId, 'staff')).resolves.toBeDefined();
        });
        
        ifPayload('teamRole')("remove role to user", async () => {
             await expect(api.teams.removeRoleToUser(config.ids.teamId, config.ids.userId, 'staff')).resolves.toBeDefined();
        });

        ifPayload('teamMember')("remove user", async () => {
             await expect(api.teams.removeUser(config.ids.teamId, config.ids.userId)).resolves.toBeDefined();
        });
        
         ifPayload('teamMember')("update member tags", async () => {
             await expect(api.teams.updateMemberTags(config.ids.teamId, config.ids.userId, 'main tank')).resolves.toBeDefined();
        });

        ifPayload('invitation')("apply to join", async () => {
             await expect(api.teams.applyToJoin(config.ids.teamId)).resolves.toBeDefined();
        });
        
        ifPayload('invitation')("invite user to join", async () => {
             await expect(api.teams.inviteUserToJoin(config.ids.teamId, "TestUser#1234")).resolves.toBeDefined();
        });

        ifPayload('lineup')("create lineup", async () => {
             await expect(api.teams.createLineup(config.ids.teamId, "Test Lineup", [config.ids.userId])).resolves.toBeDefined();
        });
        
        ifPayload('follow')("follow", async () => {
            await expect(api.teams.follow(config.ids.teamId)).resolves.toBeDefined();
        });
    });

    describe("Tickets", () => {
        ifPayload('ticketBuy')("buy ticket", async () => {
             await expect(api.tickets.buy(config.ids.challengeId, config.ids.ticketId, config.ids.teamId, 'team')).resolves.toBeDefined();
        });
    });

    describe("Users", () => {
        ifPayload('userUpdate')("put external links", async () => {
             await expect(api.users.putExternalLinks(config.ids.userId, { twitch: "https://twitch.tv/test" })).resolves.toBeDefined();
        });

        ifPayload('userUpdate')("update user", async () => {
             await expect(api.users.update(config.ids.userId, { username: "TestUserUpdated" })).resolves.toBeDefined();
        });
    });
});
