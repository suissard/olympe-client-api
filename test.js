const { OlympeApi } = require("./index.js");

const testToken =
	"E8/6JocKwvV6UcidxTmZ2KMN1wBnZzvF/7u1ekDbdQFImKWuljtUXZBWLLsiv93j5w6SVIz94y/wOhhEQSaYqfhX1SCdVXMYxj7FsSQUgQ6jp5Gq/V5fl9opDml18IlXYIV+172HCljdrVswKzhSAhsJc8fmPgTe6b6Xf/ZyM8g=";
const testDomain = "prod.api.olympe.xyz";
const testProtocole = "https";
const testXDomain="www.playallforone.com"

const olympe = new OlympeApi(testToken, testDomain, testXDomain, testProtocole);
const TEST = async () => {
	try {
		console.log(await olympe.get("challenges"));
	} catch (e) {
		console.log(e);
	}
};

TEST();
