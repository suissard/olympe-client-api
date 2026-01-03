import { describe, test, expect, vi, beforeEach } from "vitest";

const mockJson = vi.fn();
// Create a standalone mock function for fetch
const mockFetch = vi.fn().mockResolvedValue({
    ok: true,
    json: mockJson,
});

// We can use the real Headers if we want, or mock them.
// Since we are not mocking the module anymore, the real OlympeApi will use real Headers.
// This is fine.

import OlympeApi from "./OlympeApi.js";

const testToken = "test-token";
const testDomain = "api.mocked.com";

describe("OlympeApi Unit Tests (Mocked)", () => {
    let api;

    beforeEach(() => {
        vi.clearAllMocks();
        mockJson.mockReset();
         mockFetch.mockResolvedValue({
            ok: true,
            json: mockJson,
        });
        
        // Inject the mockFetch as the 5th argument
        api = new OlympeApi(testToken, testDomain, undefined, undefined, mockFetch);
    });

    test("should instantiate correctly", () => {
        expect(api.token).toBe(testToken);
        expect(api.domain).toBe(testDomain);
        expect(api.getApiUrl()).toBe(`https://${testDomain}/api/`);
    });

    describe("Challenges (Missions)", () => {
        test("getMissions (challenges.list) should return list of challenges", async () => {
            const mockData = [{ id: 1, name: "Mission 1" }];
            mockJson.mockResolvedValueOnce(mockData);

            const result = await api.challenges.list();

            expect(mockFetch).toHaveBeenCalledWith(
                `https://${testDomain}/api/challenges`,
                expect.objectContaining({ method: "GET" })
            );
            expect(result).toMatchObject(mockData);
        });

        test("challenges.list with active flag", async () => {
             const mockData = [{ id: 1, name: "Active Mission" }];
             mockJson.mockResolvedValueOnce(mockData);

             await api.challenges.list(true);
             expect(mockFetch).toHaveBeenCalledWith(
                expect.stringContaining("active=true"),
                expect.anything()
            );
        });
         test("challenges.list returns empty array on null response", async () => {
             mockJson.mockResolvedValueOnce(null);
             const result = await api.challenges.list();
             expect(result).toEqual([]);
        });
    });

    describe("Matchs (Events)", () => {
        test("getEvents (matchs.list) should return list of matches", async () => {
            const mockData = [{ id: "match-123", team1: { id: "A", name: "Team A" }, team2: { id: "B", name: "Team B" } }];
            mockJson.mockResolvedValueOnce(mockData);

            const result = await api.matchs.list();

            expect(mockFetch).toHaveBeenCalledWith(
                `https://${testDomain}/api/matchs`,
                expect.objectContaining({ method: "GET" })
            );
            expect(result).toMatchObject(mockData);
        });

        test("getEventById (matchs.get) should return match details", async () => {
            const matchId = "match-123";
            const mockData = { id: matchId, status: "scheduled" };
            mockJson.mockResolvedValueOnce(mockData);

            const result = await api.matchs.get(matchId);

            expect(mockFetch).toHaveBeenCalledWith(
                `https://${testDomain}/api/matchs/${matchId}`,
                expect.objectContaining({ method: "GET" })
            );
            expect(result).toMatchObject(mockData);
        });
    });

    describe("Users", () => {
        test("getUserByDiscordId (users.get) should return user data", async () => {
            const userId = "user-123";
            const mockData = { id: userId, username: "TestUser" };
            mockJson.mockResolvedValueOnce(mockData);

            const result = await api.users.get(userId);

            expect(mockFetch).toHaveBeenCalledWith(
                `https://${testDomain}/api/users/${userId}`,
                expect.objectContaining({ method: "GET" })
            );
            // ApiUsers wraps result
            expect(result).toMatchObject(mockData);
        });

        test("users.getPrivateActus should call correct endpoint", async () => {
             const userId = "user-123";
             mockJson.mockResolvedValueOnce([]);

             await api.users.getPrivateActus(userId);

             expect(mockFetch).toHaveBeenCalledWith(
                `https://${testDomain}/api/users/${userId}/feed`,
                 expect.anything()
             );
        });
    });
    
    describe("Error Handling", () => {
        test("should handle API errors", async () => {
            const errorResponse = { error: "Unauthorized" };
             mockFetch.mockResolvedValue({
                ok: false,
                json: () => Promise.resolve(errorResponse),
            });

            // The code throws { response, data }
            await expect(api.matchs.list()).rejects.toEqual(expect.objectContaining({
                data: errorResponse
            }));
        });
    });
});
