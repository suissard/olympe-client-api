const fetch = require("cross-fetch");
const { Headers } = fetch;

const ApiACL = require("./routes/ApiACL");
const ApiBrackets = require("./routes/ApiBrackets");
const ApiChallenge = require("./routes/ApiChallenges");
const ApiChallengesGroups = require("./routes/ApiChallengesGroups");
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
 * @class OlympeApi
 */
module.exports = class OlympeApi {
	/**
	 * Constructeur de l'API Olympe
	 * @param {string} token Token d'authentification
	 * @param {string} [domain="playallforone.com"] Domaine de l'API
	 * @param {string} [xDomain="www.playallforone.com"] Header x-domain
	 * @param {string} [protocole="https"] Protocole (http ou https)
	 * @param {function} [fetchImpl=fetch] Implémentation de fetch à utiliser (pour les tests ou polyfills)
	 */
	constructor(token, domain = "playallforone.com", xDomain = "www.playallforone.com", protocole = "https", fetchImpl = fetch) {
		this.token = token;
		this.domain = domain;
		this.xDomain = xDomain;
		this.protocole = protocole;
		this.fetch = fetchImpl;

		//Routes
		this.acl = new ApiACL(this);
		this.brackets = new ApiBrackets(this);
		this.challenges = new ApiChallenge(this);
		this.challengesGroups = new ApiChallengesGroups(this);
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
	 * @returns {string} Adresse de domaine pour les requêtes api
	 */
	getApiUrl() {
		return `${this.getDomain()}/api/`;
	}

	/**
	 * Renvoie le header
	 *
	 * @param {boolean} [bodyIsFile=false] Si le body est un fichier
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
	 * 
	 * @returns {string} L'url complète du domaine (protocole + domaine)
	 */
	getDomain() {
		return `${this.protocole}://${this.domain}`;
	}

	/**
	 * Transforme un objet de champs en paramètres d'URL
	 * 
	 * @param {Object<string, string[]>} fields Objet contenant les champs à récupérer
	 * @returns {string} Paramètres d'URL formatés (ex: "?field1=val1,val2&field2=val3")
	 */
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
	 * @param {object} obj Objet à encoder
	 * @returns {string} Chaîne encodée pour l'URL
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
	 * @param {string} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 *
	 * @returns {Promise<any>} Promesse de la requête contenant la réponse JSON
	 */
	get(url) {
		return this.makeRequest({ url, method: "GET" });
	}

	/**
	 * Effectue une requête POST
	 *
	 * @param {string} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {object} body Corps de la requête
	 *
	 * @returns {Promise<any>} Promesse de la requête contenant la réponse JSON
	 */
	post(url, body) {
		return this.makeRequest({ url, method: "POST", body });
	}

	/**
	 * Effectue une requête PUT
	 *
	 * @param {string} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {object} body Corps de la requête
	 * @param {boolean} [bodyIsFile=false] Indique si le corps est un fichier
	 *
	 * @returns {Promise<any>} Promesse de la requête contenant la réponse JSON
	 */
	put(url, body, bodyIsFile) {
		return this.makeRequest({ url, method: "PUT", body, bodyIsFile });
	}

	/**
	 * Effectue une requête DELETE
	 *
	 * @param {string} url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {object} [body] Corps de la requête (optionnel)
	 * @returns {Promise<any>} Promesse de la requête contenant la réponse JSON
	 */
	delete(url, body) {
		return this.makeRequest({ url, method: "DELETE", body });
	}

	/**
	 * Creer un object de requete
	 *
	 * @param {object} object Paramètres de la requête
	 * @param {string} [object.url] Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} object.method Méthode HTTPS
	 * @param {object} [object.body] Corps de la requête
	 * @param {Headers} [object.headers] Headers personnalisés
	 * @param {boolean} [object.bodyIsFile] Si le body est un fichier
	 *
	 * @returns {object} Objet de configuration pour fetch
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
	 * @param {object} object Paramètres de la requête
	 * @param {string} object.url Route de l'api a sollicité (url complète seras "this.getApiUrl() + url")
	 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} object.method Méthode HTTPS
	 * @param {object} [object.body] Corps de la requête
	 * @param {Headers} [object.headers] Headers personnalisés
	 * @param {boolean} [object.bodyIsFile] Si le body est un fichier
	 *
	 * @returns {Promise<any>} Promesse de la requête contenant la réponse JSON
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
			this.fetch(`${this.getApiUrl()}${url}`, request)
				.then(async (response) => {
					let data
					if (!response?.ok) throw { data, response };
					data = await response
						.json()
						.catch(e => { throw { data, response } });

					resolve(data, response);
				})
				.catch(reject);
		});
	}
};
