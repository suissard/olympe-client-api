const fetch = require("cross-fetch");
const { Headers } = fetch;

const ApiChallenge = require("./routes/ApiChallenges");
const ApiDiscord = require("./routes/ApiDiscord");
const ApiInvitation = require("./routes/ApiInvitation");
const ApiMarketPlace = require("./routes/ApiMarketPlace");
const ApiMatchs = require("./routes/ApiMatchs");
const ApiOrganization = require("./routes/ApiOrganization");
const ApiPool = require("./routes/ApiPool");
const ApiSegment = require("./routes/ApiSegment");
const ApiStep = require("./routes/ApiStep");
const ApiTeams = require("./routes/ApiTeams");
const ApiTicket = require("./routes/ApiTicket");
const ApiUsers = require("./routes/ApiUsers");

/**
 * Gestion des requêtes à l'API
 */
module.exports = class OlympeApi {
	constructor(token, domain = "playallforone.com", xDomain="www.playallforone.com",  protocole = "https") {
		this.token = token;
		this.domain = domain;
		this.xDomain = xDomain;
		this.protocole = protocole;

		//Routes
		this.challenges = new ApiChallenge(this);
		this.discord = new ApiDiscord(this);
		this.invitations = new ApiInvitation(this);
		this.marketplace = new ApiMarketPlace(this);
		this.matchs = new ApiMatchs(this);
		this.organizations = new ApiOrganization(this);
		this.pools = new ApiPool(this);
		this.segments = new ApiSegment(this);
		this.steps = new ApiStep(this);
		this.teams = new ApiTeams(this);
		this.tickets = new ApiTicket(this);
		this.users = new ApiUsers(this);
	}
	/**
	 * Renvoie le nom de domaine à utiliser pour les requêtes (permet une construction dynamique)
	 *
	 * @returns {String} Adresse de domaine pour les requêtes api
	 */
	getApiUrl() {
		return `${this.getDomain()}/api/`;
	}

	/**
	 * Renvoie le header
	 *
	 * @returns {Headers} Header avec authorization bearer
	 */
	getHeader(bodyIsFile = false) {
		const header = { "x-domain": this.xDomain };
		if (!bodyIsFile) header["Content-Type"] = "application/x-www-form-urlencoded";
		if (this.token) header.Authorization = `Bearer ${this.token}`;
		return new Headers(header);
	}

	/**
	 * Nécessaire pour faire tourner les composants de la version 1 du site
	 */
	getDomain() {
		return `${this.protocole}://${this.domain}`;
	}

	getFields(fields) {
		if (!fields) return "";

		const param = this.jsonToFormUrlEncoder(
			Object.keys(fields).reduce(
				(acc, curr) => ({ ...acc, [curr]: fields[curr].join(",") }),
				{}
			)
		);

		return param ? `?${param}` : "";
	}

	/**
	 * Transpose un objet en un format compatible avec le content-type :x-www-formUrlEncoder
	 *
	 * @param {Object} obj
	 */
	jsonToFormUrlEncoder(obj) {
		const str = [];

		// eslint-disable-next-line no-restricted-syntax
		for (const key in obj) {
			// TODO pose des prb avec les arrays et objets ?
			if (obj[key] instanceof Object) {
				if (obj[key] !== undefined) {
					str.push(`${encodeURIComponent(key)}=${this.jsonToFormUrlEncoder(obj[key])}`);
				}
				// ======================
			} else if (obj[key] !== undefined) {
				str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
			}
		}

		return str.join("&");
	}

	/**
	 * Effectue une requête GET
	 *
	 * @param {String} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 *
	 * @returns {Promise} Promesse de la requête
	 */
	get(url) {
		return this.makeRequest({ url, method: "GET" });
	}

	/**
	 * Effectue une requête POST
	 *
	 * @param {String} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {Object} body Corps de la requête
	 *
	 * @returns {Promise} Promesse de la requête
	 */
	post(url, body) {
		return this.makeRequest({ url, method: "POST", body });
	}

	/**
	 * Effectue une requête PUT
	 *
	 * @param {String} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {Object} body Corps de la requête
	 *
	 * @returns {Promise} Promesse de la requête
	 */
	put(url, body, bodyIsFile) {
		return this.makeRequest({ url, method: "PUT", body, bodyIsFile });
	}

	/**
	 * Effectue une requête DELETE
	 *
	 * @param {String} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @returns {Promise} Promesse de la requête
	 */
	delete(url, body) {
		return this.makeRequest({ url, method: "DELETE", body });
	}

	/**
	 * Creer un object de requete
	 *
	 * @param {Object} object
	 * @param {String} object.url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {GET | POST | PUT | DELETE} object.method Méthode HTTPS
	 * @param {Object} object.body Corps de la requête
	 *
	 * @returns {Promise} Promesse de la requête
	 */
	getRequestObject({
		method,
		body = undefined,
		headers = undefined,
		bodyIsFile = false,
	}) {
		const request = { method, headers: headers ?? this.getHeader(bodyIsFile) };

		if (body && !bodyIsFile) request.body = this.jsonToFormUrlEncoder(body);
		if (body && bodyIsFile) {
			request.body = new URLSearchParams();
			request.body.append("image", body);
		}
		return request;
	}

	/**
	 * Effectue une requête au format Promesse
	 *
	 * @param {Object} object
	 * @param {String} object.url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {GET | POST | PUT | DELETE} object.method Méthode HTTPS
	 * @param {Object} object.body Corps de la requête
	 *
	 * @returns {Promise} Promesse de la requête
	 */
	makeRequest({
		url,
		method,
		body = undefined,
		headers = undefined,
		bodyIsFile = false,
	}) {
		const request = this.getRequestObject({ method, body, headers, bodyIsFile });

		return new Promise((resolve, reject) => {
			fetch(`${this.getApiUrl()}${url}`, request)
				.then(async (response) => {
					const data = await response
						.json()
						.then((res) => res)
						.catch(reject);

					if (!response?.ok) throw { response, data };
					resolve(data, response);
				})
				.catch(reject);
		});
	}
};
