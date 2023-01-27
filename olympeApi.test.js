import { describe, test, expect } from "vitest";
import { Headers } from "node-fetch";

import OlympeApi from "./src/OlympeApi.js";
import ApiChallenge from "./src/routes/ApiChallenges";
import ApiDiscord from "./src/routes/ApiDiscord";
import ApiInvitation from "./src/routes/ApiInvitation";
import ApiMarketPlace from "./src/routes/ApiMarketPlace";
import ApiMatchs from "./src/routes/ApiMatchs";
import ApiOrganization from "./src/routes/ApiOrganization";
import ApiPool from "./src/routes/ApiPool";
import ApiSegment from "./src/routes/ApiSegment";
import ApiStep from "./src/routes/ApiStep";
import ApiTeams from "./src/routes/ApiTeams";
import ApiTicket from "./src/routes/ApiTicket";
import ApiUsers from "./src/routes/ApiUsers";


const testToken = 'token'
const testDomain = 'dev.playallforone.com'
const testProtocole = 'https'

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
			expect(api.getHeader().get("Content-Type")).toBe(
				"application/x-www-form-urlencoded"
			);
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

	})