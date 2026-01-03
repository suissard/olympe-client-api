# Olympe Client API

Bienvenue sur la documentation de l'Olympe Client API. Cette librairie permet d'interagir facilement avec l'API d'Olympe pour récupérer des informations sur les utilisateurs, les équipes, les matchs, et bien plus encore.

## Installation

```bash
npm install olympe-client-api
```

## Structure de l'API

L'API est structurée autour de la classe principale `OlympeApi`. Cette classe agit comme un point d'entrée unique et expose différentes propriétés pour accéder aux différentes catégories de ressources (utilisateurs, équipes, etc.).

Chaque catégorie est gérée par une classe dédiée (ex: `ApiUser` pour les utilisateurs, `ApiTeam` pour les équipes) accessible via une propriété de `OlympeApi`.

### Initialisation

Pour utiliser l'API, vous devez instancier la classe `OlympeApi` avec votre token d'authentification.

```javascript
const OlympeApi = require('olympe-client-api');

const api = new OlympeApi('VOTRE_TOKEN');
```

## Accès aux ressources

Une fois l'instance crée (nommée `api` ou `bot.olympe` dans vos projets), vous pouvez accéder aux méthodes via les propriétés suivantes :

- **Utilisateurs**: `api.users` (Instance de `ApiUser`)
  - Ex: `api.users.get('user_id')`
- **Équipes**: `api.teams` (Instance de `ApiTeam`)
  - Ex: `api.teams.list()`
- **Matchs**: `api.matchs` (Instance de `ApiMatch`)
  - Ex: `api.matchs.list({ active: true })`
- **Challenges**: `api.challenges` (Instance de `ApiChallenge`)
- **Discord**: `api.discord` (Instance de `ApiDiscord`)
- **...et plus** (voir le menu "Classes" pour la liste complète)

## Utilisation de la documentation

Pour chaque méthode listée dans le menu "Classes", vous trouverez :
1.  **Une description** de ce que fait la fonction.
2.  **Des exemples de code** montrant exactement comment l'appeler.
3.  **Un bouton copier** pour récupérer rapidement le code.

Bon développement !
