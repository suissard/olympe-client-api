import { describe, test, expect } from "vitest";
import { Headers } from "node-fetch";

import OlympeApi from "./src/OlympeApi.js";
import ApiChallenge from "./src/routes/ApiChallenges.js";
import ApiDiscord from "./src/routes/ApiDiscord.js";
import ApiInvitation from "./src/routes/ApiInvitation.js";
import ApiMarketPlace from "./src/routes/ApiMarketPlace.js";
import ApiMatchs from "./src/routes/ApiMatchs.js";
import ApiOrganization from "./src/routes/ApiOrganization.js";
import ApiPool from "./src/routes/ApiPool.js";
import ApiSegment from "./src/routes/ApiSegment.js";
import ApiStep from "./src/routes/ApiStep.js";
import ApiTeams from "./src/routes/ApiTeams.js";
import ApiTicket from "./src/routes/ApiTicket.js";
import ApiUsers from "./src/routes/ApiUsers.js";

const testToken =
	"wha4p9q/fdq3ibStXfkXKFYf+ge2+Uj4pmvFI1yaiReRTy9Uq/Lv5tAth9Z0oNgwegWiimYWygLuXM5A3aAi+vNZrro26WDOEhgjfDZ7EKR7hA/IRk92o1FK8CHBHUx9+8r1J6kfGOVBrRwcXqAaxAzmY+Pi1Msjhsm20JGzk1s=";
const testDomain = "dev.playallforone.com";
const testProtocole = "https";

/**
 * Est ce que l'object fournit contient certaines entrées
 * @param {Object} obj
 * @param {Array} entries
 * @returns {Boolean}
 */
const objectHaveEntries = (obj, entries) => {
	for (const [entrie, value] of Object.entries(entries)) {
		if (typeof value === "string") {
			if (typeof obj[entrie] !== value) {
				console.error("error", entrie, `${value} => ${typeof obj[entrie]}`);
				return false;
			}
		} else if (!objectHaveEntries(obj[entrie], value)) return false;
	}
	return true;
};

describe("Instanciation", () => {
	test("should create an default instance", () => {
		const olympe = new OlympeApi();
		expect(olympe).toBeDefined();
		expect(olympe.token).toBeUndefined();
		expect(olympe.domain).toBe("playallforone.com");
		expect(olympe.protocole).toBe("https");

		expect(olympe.challenges).toBeInstanceOf(ApiChallenge);
		expect(olympe.discord).toBeInstanceOf(ApiDiscord);
		expect(olympe.invitations).toBeInstanceOf(ApiInvitation);
		expect(olympe.marketplace).toBeInstanceOf(ApiMarketPlace);
		expect(olympe.matchs).toBeInstanceOf(ApiMatchs);
		expect(olympe.organizations).toBeInstanceOf(ApiOrganization);
		expect(olympe.pools).toBeInstanceOf(ApiPool);
		expect(olympe.segments).toBeInstanceOf(ApiSegment);
		expect(olympe.steps).toBeInstanceOf(ApiStep);
		expect(olympe.teams).toBeInstanceOf(ApiTeams);
		expect(olympe.tickets).toBeInstanceOf(ApiTicket);
		expect(olympe.users).toBeInstanceOf(ApiUsers);
	});

	test("should create an instance with data", () => {
		const olympe = new OlympeApi(testToken, testDomain, testProtocole);
		expect(olympe).toBeDefined();
		expect(olympe.token).toBe(testToken);
		expect(olympe.domain).toBe(testDomain);
		expect(olympe.protocole).toBe(testProtocole);
	});
});

const url = "token";
const method = "GET";
const body = { test: "testing, testing" };
const bodyIsFile = true;

describe("Tests unitaires", () => {
	test("Test de toute les fonctions", () => {
		const api = new OlympeApi(testToken, testDomain, testProtocole);

		expect(api).toBeInstanceOf(OlympeApi);
		expect(api.getApiUrl()).toBe(`${testProtocole}://${testDomain}/api/`);
		expect(api.getDomain()).toBe(`${testProtocole}://${testDomain}`);
		expect(api.getHeader()).toBeInstanceOf(Headers);
		expect(api.getHeader().get("Content-Type")).toBe("application/x-www-form-urlencoded");
		expect(api.getHeader().get("Authorization")).toBe(`Bearer ${testToken}`);
		const headers = api.getHeader();

		expect(api.getFields()).toBe("");
		expect(api.getFields({})).toBe("");
		expect(api.getFields({ test: ["test"] })).toBe("?test=test");
		expect(api.getFields({ test: ["test", "test2"] })).toBe("?test=test%2Ctest2");
		expect(api.jsonToFormUrlEncoder(body)).toBe("test=testing%2C%20testing");

		expect(
			api.getRequestObject({ url, method, body, headers, bodyIsFile })
		).toBeInstanceOf(Object);
		expect(api.getRequestObject({ method, body, headers, bodyIsFile }).method).toBe(
			method
		);
		expect(
			api.getRequestObject({ method, body, headers, bodyIsFile }).body
		).toBeInstanceOf(URLSearchParams);
		expect(api.getRequestObject({ method, body, headers, bodyIsFile }).headers).toBe(
			headers
		);
	});
});

describe("Tests unitaires", () => {
	test("Test de toute les fonctions", async () => {
		const api = new OlympeApi(testToken, testDomain, testProtocole);
		const {
			challenges,
			discord,
			invitations,
			marketplace,
			matchs,
			organizations,
			pools,
			segments,
			steps,
			teams,
			tickets,
			users,
		} = api;

		const challs = await challenges.list();
		expect(challs).toBeInstanceOf(Array);
		expect(JSON.stringify(challs)).toMatch(/({"id":[0-9]+,"name":".+".+},*){2,}/);
		expect(objectHaveEntries(challs[0], { id: "number", name: "string" })).toBeTruthy();

		const dis = await discord.getDiscordAuthUrl();
		expect(dis.url).toMatch(
			/https\:\/\/discord.com\/oauth2\/authorize\?response_type=code\&client_id=[0-9]+\&state=.+\&redirect_uri=.+&scope=identify email guilds connections/
		);

		//Pas de test pour invit
		// const invit1 = await invitations.remove(invitationID)
		// const invit2 = await invitations.reply()
		// console.log('invit', invit)
		// expect((invit)).toBeInstanceOf(Error)

		const marketplaceList = await marketplace.list(challs[0].id);
		// expect(JSON.stringify(marketplaceList)).toMatch(/\["users":[0-9]+,"pages":[0-9]+,"data":\[(\{"user":.+,"team":.+,"segment":.+\},*)*\]\]/)
		expect(
			objectHaveEntries(marketplaceList, {
				users: "number",
				pages: "number",
				data: "object",
			})
		).toBeTruthy();
		const marketplaceListData = marketplaceList.data[0];
		expect(
			objectHaveEntries(marketplaceListData, {
				user: {
					id: "string",
					username: "string",
					publicEmail: "number",
					publicBattlenetBtag: "number",
					nationality: "string",
					marketplaceTransfer: "number",
					marketplaceLent: "number",
					thirdparties: "object",
					followers: { number: "number" },
					// registerDate: null,
				},
				team: {
					id: "string",
					name: "string",
					nationality: "string",
					recruitment: "number",
					registerDate: "number",
					externalLinks: "object",
					additionalFields: {
						member: {
							user: "object",
							tags: "object",
							roles: "object",
							ticketsPurchased: "object",
						},
					},
				},
				segment: {
					id: "number",
					challengeID: "number",
					position: "number",
					name: "string",
				},
			})
		).toBeTruthy();

		const matchList = await matchs.list();
		expect(matchList).toBeInstanceOf(Array);
		expect(
			objectHaveEntries(matchList[0], {
				id: "string",
				challenge: { id: "number", name: "string" },
				segment: {
					id: "number",
					challengeID: "number",
					position: "number",
					name: "string",
				},
				matchDate: "number",
				team1: {
					id: "string",
					name: "string",
					nationality: "string",
					recruitment: "number",
					registerDate: "number",
					externalLinks: "object",
					score: "number",
				},
				team2: {
					id: "string",
					name: "string",
					nationality: "string",
					recruitment: "number",
					registerDate: "number",
					externalLinks: "object",
					score: "number",
				},
				scores: "object",
				casters: "object",
			})
		).toBeTruthy();
		const match1 = await matchs.get(matchList[0].id);
		expect(
			objectHaveEntries(match1, {
				id: "string",
				challenge: { id: "number", name: "string" },
				segment: {
					id: "number",
					challengeID: "number",
					position: "number",
					name: "string",
				},
				matchDate: "number",
				team1: {
					id: "string",
					name: "string",
					nationality: "string",
					recruitment: "number",
					registerDate: "number",
					externalLinks: "object",
					score: "number",
					lineup: {
						id: "number",
						name: "string",
						team: "object",
						members: "object",
						substitutes: "object",
						registerDate: "number",
					},
				},
				team2: {
					id: "string",
					name: "string",
					nationality: "string",
					recruitment: "number",
					registerDate: "number",
					externalLinks: "object",
					score: "number",
				},
				scores: "object",
				casters: "object",

				matchDateProposals: "object",
				pool: {
					id: "number",
					name: "string",
					challengeID: "number",
					segmentID: "number",
					stepsID: "object",
					minScoresPerMatch: "number",
				},
				steps: "object",
			})
		).toBeTruthy();
	}, 50000);
});
