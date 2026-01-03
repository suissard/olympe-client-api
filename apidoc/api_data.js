define({ "api": [
  {
    "type": "delete",
    "url": "/acl/:idACL",
    "title": "Delete an ACL",
    "name": "DeleteACL",
    "group": "ACL",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idACL",
            "description": "<p>[URL] ACL id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>ACL deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/acl/deleteACLUser.py",
    "groupTitle": "ACL",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/acl",
    "title": "Get organization ACL",
    "name": "GetACLs",
    "group": "ACL",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "publicEmail",
            "description": "<p>1 if public, 0 if private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "battlenetBtag",
            "description": "<p>Battlenet Battletag of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "publicBattlenetBtag",
            "description": "<p>1 if public, 0 if private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "registerDate",
            "description": "<p>Registration date of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "organizationRoles",
            "description": "<p>List of current organization roles for admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "organizationRolesAdvanced",
            "description": "<p>Advanced list of current organization roles for admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "thirdparties",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "thirdparties-discord",
            "description": "<p>Object. Null if no account linked</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "thirdparties-discord-publicDiscordTag",
            "description": "<p>1 if public, 0 if private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "thirdparties-discord-discordTag",
            "description": "<p>Discord Tag (update may be delayed due to cache). Null if account is private</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/acl/getACLUsers.py",
    "groupTitle": "ACL",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/acl",
    "title": "Create an ACL",
    "name": "PostACL",
    "group": "ACL",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>[Body] UserID or username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>[Body] Role name. Allowed values: ['owner', 'caster']</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "expirationDate",
            "description": "<p>[Body] Expiration date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>ACL created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/acl/postACLUser.py",
    "groupTitle": "ACL",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/brackets/:idBracket",
    "title": "Delete a bracket",
    "name": "DeleteBracket",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idBracket",
            "description": "<p>[URL] Bracket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Bracket Deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/deleteBracket.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/bracketsconfigs/:id",
    "title": "Delete a BracketConfigs",
    "name": "DeleteBracketConfigs",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idBracketConfigs",
            "description": "<p>[URL] BracketConfigs ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>BracketConfigs delete</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/deleteBracketConfigs.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/brackets/:idBracket",
    "title": "Get bracket",
    "name": "GetBracket",
    "group": "Brackets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idBracket",
            "description": "<p>[URL] Bracket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Bracket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "segmentID",
            "description": "<p>ID of the Segement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "stepsID",
            "description": "<p>List of stepsID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Bracket name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "bracketConfigs",
            "description": "<p>bracketConfigs object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rounds",
            "description": "<p>Defined only if teams are presents</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/getBracket.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/bracketsconfigs/:id",
    "title": "Get a bracketConfigs",
    "name": "GetBracketConfigs",
    "group": "Brackets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] BracketConfigs ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>BracketConfigs ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'single' or 'double'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ChallengeID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfPlayersPerScore",
            "description": "<p>Number of players per score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "applyNextWinnerOrLoserMatch",
            "description": "<p>0 or 1. If 1, the winner and the loser will be assigned to their next respective matches</p>"
          },
          {
            "group": "Success 200",
            "type": "FormatObj[]",
            "optional": false,
            "field": "formats",
            "description": "<p>List of FormatObj for winner bracket</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "formats.format",
            "description": "<p>Name (BO3, FT5, free, ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "formats.formatValues",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "formats.formatValues.minScoresPerMatch",
            "description": "<p>Minumum number of scores per match</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "formats.formatValues.maxScoresPerMatch",
            "description": "<p>Maximum number of scores per match</p>"
          },
          {
            "group": "Success 200",
            "type": "FormatObj[]",
            "optional": true,
            "field": "formatsLB",
            "description": "<p>List of FormatObj for loser bracket</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/getBracketConfigs.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/brackets/:idBracket/ranking",
    "title": "Get bracket ranking",
    "name": "GetBracketRanking",
    "group": "Brackets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idBracket",
            "description": "<p>[URL] Bracket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ranking",
            "description": "<p>List by rank. 0 = first, 1 = second, ...</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ranking.team",
            "description": "<p>TeamObj</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/getBracketRanking.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/brackets/:idBracket/teams",
    "title": "List teams added in the bracket",
    "name": "GetBraketTeams",
    "group": "Brackets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idBracket",
            "description": "<p>[URL] Bracket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of team objects. See team object in GET /teams/:id (Some values may not be present). New entry: poolStats</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/bracketteamsGetTeams.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/brackets/:idbracket/teams/available",
    "title": "List teams ready to be added in the bracket",
    "name": "GetbracketTeamsAvailable",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idbracket",
            "description": "<p>[URL] bracket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of team objects. See team object in GET /teams/:id (Some values may not be present)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/bracketteamsGetTeamsAvailable.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/brackets",
    "title": "List brackets",
    "name": "ListBracket",
    "group": "Brackets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p> <h1>@apiParam {String}     [segmentsID]    [Query] Filter by segmentID with comma (example: 1,2,3)</h1> <h1>@apiParam {String}     [stepsID]       [Query] Filter by stepID with comma (example: 1,2,3)</h1>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body.brackets",
            "description": "<p>Array of brackets objects. See bracket object in GET /challenges/:id/brackets/:id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/getBrackets.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/bracketsconfigs",
    "title": "List bracketsConfigs",
    "name": "ListBracketConfigs",
    "group": "Brackets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body.bracketsconfigs",
            "description": "<p>Array of bracketConfigs objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/getBracketsConfigs.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:id/brackets",
    "title": "Create a bracket",
    "name": "PostBracket",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Bracket name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "segmentID",
            "description": "<p>[Body] Segment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stepsID",
            "description": "<p>[Body] List of stepID with comma (example: 1,2,3)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bracketConfigsID",
            "description": "<p>[Body] BracketConfigs ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Bracket object. See bracket object in GET /challenges/:id/brackets</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/postBracket.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:id/bracketsconfigs",
    "title": "Create a BracketConfigs",
    "name": "PostBracketConfigs",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Configs name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>[Body] Allowed values: ['single', 'double']</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfPlayersPerScore",
            "description": "<p>[Body] number of players per score</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formats",
            "description": "<p>[Body] Winner bracket: List of match format (BO3, FT5, free, ..) with comma (example: BO3,free,FT5)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formatsLB",
            "description": "<p>[Body] Loser bracket: List of match format (BO3, FT5, free, ..) with comma (example: BO3,free,FT5)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>BracketConfigs created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/postBracketConfigs.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/brackets/:idBrackets/teams",
    "title": "Add team in the bracket",
    "name": "PostBracketTeams",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idBracket",
            "description": "<p>[URL] Bracket ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamsID",
            "description": "<p>[Body] List of team id (list of string, splited by a comma ',')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Teams added</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/bracketteamsPostTeam.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/brackets/:id",
    "title": "Update a bracket",
    "name": "PutBracket",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Bracket ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Bracket name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segmentID",
            "description": "<p>[Body] Segment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bracketConfigsID",
            "description": "<p>[Body] bracketConfigs ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "stepsID",
            "description": "<p>[Body] List of stepID with comma (example: 1,2,3)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Bracket updated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/putBracket.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/bracketsconfigs/:id",
    "title": "Update a bracketConfigs",
    "name": "PutBracketConfigs",
    "group": "Brackets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] BracketConfigs ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Configs name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "numberOfPlayersPerScore",
            "description": "<p>[Body] number of players per score</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "formats",
            "description": "<p>[Body] List of match format (BO3, FT5, free, ..) with comma. Allow 'null' or '' to remove format. (example: BO3,free,FT5,null)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "formatsLB",
            "description": "<p>[Body] List of match format (BO3, FT5, free, ..) with comma. Allow 'null' or '' to remove format. (example: BO3,free,FT5,null)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "applyNextWinnerOrLoserMatch",
            "description": "<p>[Body] If 1, the winner and the loser will be assigned to their next respective matches. Allowed values: [0, 1]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>BracketConfigs updated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/brackets/putBracketConfigs.py",
    "groupTitle": "Brackets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:id",
    "title": "Delete a challenge",
    "name": "DeleteChallenge",
    "group": "Challenges",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Challenge deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge does not exist</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/deleteChallenge.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id",
    "title": "Get a challenge",
    "name": "GetChallenge",
    "group": "Challenges",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/getChallengeByID.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Main language</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/configs",
    "title": "Get challenge configs",
    "name": "GetChallengeConfigs",
    "group": "Challenges",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeRulesURL",
            "description": "<p>Link to the competition rules. Can by empty.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/getChallengeConfigs.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/participants",
    "title": "Get teams participants",
    "name": "GetChallengeTeamsParticipants",
    "group": "Challenges",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "object",
            "description": "<p>body</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "object.teams",
            "description": "<p>Array of minimal team objects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/getChallengeTeamsParticipants.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges",
    "title": "List challenges",
    "name": "GetChallenges",
    "group": "Challenges",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": true,
            "field": "active",
            "description": "<p>[Query] Return only challenges with active steps (this variable must be added in url as ?active=true/false)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of challenges objects. See challenge object in GET /challenges/:id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>No challenges created</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/getChallenges.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challengesgroups/id",
    "title": "Delete a challenges group",
    "name": "DeleteChallengeGroup",
    "group": "ChallengesGroups",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] ChallengeGroup ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>ChallengeGroup deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/deleteChallengesGroups.py",
    "groupTitle": "ChallengesGroups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challengesgroups",
    "title": "List challengesGroups",
    "name": "GetChallengesGroups",
    "group": "ChallengesGroups",
    "version": "0.0.0",
    "filename": "/data/routes/challenges/getChallengesGroups.py",
    "groupTitle": "ChallengesGroups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the ChallengeGroup</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ChallengeGroup</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challengesgroups",
    "title": "Create a challenges group",
    "name": "PostChallengeGroup",
    "group": "ChallengesGroups",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] ChallengeGroup ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Group name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ChallengeGroup name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/postChallengeGroup.py",
    "groupTitle": "ChallengesGroups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the ChallengeGroup</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ChallengeGroup</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challengesgroups/id",
    "title": "Put a challenges group",
    "name": "PutChallengeGroup",
    "group": "ChallengesGroups",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] ChallengeGroup ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Group name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ChallengeGroup name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/putChallengesGroups.py",
    "groupTitle": "ChallengesGroups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the ChallengeGroup</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ChallengeGroup</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges",
    "title": "Create a challenge",
    "name": "PostChallenge",
    "group": "Challenges",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Challenge name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>[Body] Challenge main language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "challengesGroupID",
            "description": "<p>[Body] ChallengesGroup ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/postChallenge.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Main language</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:id",
    "title": "Update a challenge",
    "name": "PutChallenge",
    "group": "Challenges",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Challenge name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>[Body] Challenge main language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "challengesGroupID",
            "description": "<p>[Body] ChallengesGroup ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge does not exist</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/putChallenge.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Main language</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:id/configs",
    "title": "Put challenge configs",
    "name": "PutChallengeConfigs",
    "group": "Challenges",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "challengeRulesURL",
            "description": "<p>[BODY] Link to the competition rules. Can by empty.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/putChallengeConfigs.py",
    "groupTitle": "Challenges",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/invitations/:id",
    "title": "Remove an invitation",
    "name": "DeleteInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Invitation ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Invitation deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/invitations/deleteInvitation.py",
    "groupTitle": "Invitations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/invitations/:id",
    "title": "Reply to an invitation",
    "name": "ReplyInvitation",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]   Invitation ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accepted",
            "description": "<p>[Body]  0: invitation refused / 1: invitation accepted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Reply accepted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/invitations/replyInvitation.py",
    "groupTitle": "Invitations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/marketplace/quotas/:id",
    "title": "Delete Marketplace quotas",
    "name": "DeleteMarketplaceQuotas",
    "group": "Marketplace",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>[URL] Marketplace quotas ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/marketplace/deleteMPQuotas.py",
    "groupTitle": "Marketplace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/marketplace/histories",
    "title": "Get a marketplace public histories",
    "name": "GetMarketplaceHistories",
    "group": "Marketplace",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>[Query] Result page (offset). First page: 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "challengeID",
            "description": "<p>[Query] Filter by challengeID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>[Query] Provide this value (find on body's page=0) when requesting page &gt;= 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "types",
            "description": "<p>[Query] Allowed values: ['transfer', 'lent']. (list of string, splited by a comma ',')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "states",
            "description": "<p>[Query] Allowed values: ['accepted', 'refused']. (list of string, splited by a comma ',')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/marketplace/getMPHistories.py",
    "groupTitle": "Marketplace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lines",
            "description": "<p>Total lines available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total pages available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>Provide this value as query parameter when requesting page &gt;= 1</p>"
          },
          {
            "group": "Success 200",
            "type": "HistoryObj[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of history object. Sometimes more objects than expected may be present.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>History ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>History type</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data.action",
            "description": "<p>Details as json format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.visibility",
            "description": "<p>Who can see this history</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.registerDate",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "userObj",
            "optional": true,
            "field": "data.user",
            "description": "<p>Present on user's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": true,
            "field": "data.team",
            "description": "<p>Present on team's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "matchObj(light)",
            "optional": true,
            "field": "data.match",
            "description": "<p>Present on match's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "ChallengeObj",
            "optional": true,
            "field": "data.challenge",
            "description": "<p>Challenge object</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/marketplace/quotas",
    "title": "Get quotas",
    "name": "GetMarketplaceQuotas",
    "group": "Marketplace",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>[Query] Filter by challengeID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "teamID",
            "description": "<p>[Query] Return quota usage for this team</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>Array of QuotaObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.id",
            "description": "<p>Marketplace quota ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body.name",
            "description": "<p>Marketplace quota name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body.organization",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.organization.id",
            "description": "<p>Organization ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body.challenge",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.challenge.id",
            "description": "<p>Challenge ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body.scope",
            "description": "<p>Possible values: ['challengeScoped' =&gt; 'quotas will be apply for all steps in this challenge', 'stepsScoped' =&gt; 'quotas will be apply for selected steps']</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.maxLent",
            "description": "<p>Max lent. Could be NULL if unlimited</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.maxTansfert",
            "description": "<p>Max transfer. Could be NULL if unlimited</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body.steps",
            "description": "<p>List of stepObj. If empty, quotas will be apply for all steps in this challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "body.teamUsage",
            "description": "<p>Team quota usage</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body.teamUsage.lent",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.teamUsage.lent.total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.teamUsage.lent.accepted",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.teamUsage.lent.refused",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body.teamUsage.transfer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.teamUsage.transfer.total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.teamUsage.transfer.accepted",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.teamUsage.transfer.refused",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "body.registerDate",
            "description": "<p>register date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/marketplace/getMPQuotas.py",
    "groupTitle": "Marketplace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/marketplace/users/available",
    "title": "Get available users",
    "name": "GetMarketplaceUsersAvailable",
    "group": "Marketplace",
    "description": "<p>Return data order by segment ASC, and marketplace status last update date DESC</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>[Query] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>[Query] Result page (offset). First page: 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segmentsID",
            "description": "<p>[Query] Filter by segmentsID (list of segmentID, splited by a comma ',')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "teamName",
            "description": "<p>[Query] DEPRECATED. Use 'search' param instead</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>[Query] Filter by team name or username. At least 3 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "usersNationalities",
            "description": "<p>[Query] Filter by users nationalities. List of nationality (2 characteres, like 'us'), splited by a comma ','</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "usersPreference",
            "description": "<p>[Query] Allowed values: ['transfer': return users allowing transfer, 'lent': return users allowing lent]. Not provided: return users allowing transfer or lent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users",
            "description": "<p>Total users available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total pages available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data[]",
            "description": "<p>Array of results for this page</p>"
          },
          {
            "group": "Success 200",
            "type": "UserObj",
            "optional": false,
            "field": "data.user",
            "description": "<p>User object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": true,
            "field": "data.team",
            "description": "<p>Team object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.team.additionalFields",
            "description": "<p>Additional fields</p>"
          },
          {
            "group": "Success 200",
            "type": "MemberObj",
            "optional": true,
            "field": "data.team.additionalFields.member",
            "description": "<p>Member object</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": true,
            "field": "data.segment",
            "description": "<p>Segment object. Present only when team object exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/marketplace/getMPUsersAvailable.py",
    "groupTitle": "Marketplace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/marketplace/quotas",
    "title": "Add quotas",
    "name": "PostMarketplaceQuotas",
    "group": "Marketplace",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Quotas name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>[Body] ChallengeID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stepsID",
            "description": "<p>[Body] Quotas scope. (list of stepID, splited by a comma ','). If not provided or empty, quotas will be apply for all steps in this challenge</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "maxLent",
            "description": "<p>[Body] Max lent allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "maxTransfer",
            "description": "<p>[Body] Max transfer allowed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/marketplace/postMPQuotas.py",
    "groupTitle": "Marketplace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/marketplace/users/invitations",
    "title": "Transfer/lent player to join my team",
    "name": "PostMarketplaceUsersInvitations",
    "group": "Marketplace",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "invitationType",
            "description": "<p>[Body] Allowed values: ['transfer', 'lent']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userIDSource",
            "description": "<p>[Body] Source userID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "teamIDSource",
            "description": "<p>[Body] Source teamID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamIDDest",
            "description": "<p>[Body] Destination teamID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>[Body] ChallengeID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lentExpirationDate",
            "description": "<p>[Body] Timestamp: lent expiration. After this date, sourceUser cannot play destTeam's matchs</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/marketplace/postMPUsersInvitations.py",
    "groupTitle": "Marketplace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/matchs/:idMatch/casts",
    "title": "Remove caster (me) from the match",
    "name": "DeleteMatchCasts",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMatch",
            "description": "<p>[URL] Match ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Cast removed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/deleteCast.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/matchs/:idMatch/dates",
    "title": "Remove a scheduled match",
    "name": "DeleteMatchDate",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMatch",
            "description": "<p>[URL] Match ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Match date removed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/deleteDate.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/matchs/:matchID/scores",
    "title": "Remove a score",
    "name": "DeleteMatchScores",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Score deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/deleteScores.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/matchs/:matchID/force-date",
    "title": "Force a match schedule",
    "name": "ForceMatchDate",
    "group": "Matchs",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>[Body] Forced date (timestamp)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Match date forced</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/forceDate.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/matchs/:id",
    "title": "Get match",
    "name": "GetMatch",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Match not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/getMatch.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Match ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "matchDate",
            "description": "<p>Timestamp or null: match date</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "matchDateProposals",
            "description": "<p>List of proposed matchDate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teamID_winner",
            "description": "<p>Can be teamID_1, teamID_2 or null</p>"
          },
          {
            "group": "Success 200",
            "type": "challengeObj",
            "optional": false,
            "field": "challenge",
            "description": "<p>Challenge object</p>"
          },
          {
            "group": "Success 200",
            "type": "poolObj",
            "optional": false,
            "field": "pool",
            "description": "<p>Pool object</p>"
          },
          {
            "group": "Success 200",
            "type": "segmentObj",
            "optional": false,
            "field": "segment",
            "description": "<p>Segment object</p>"
          },
          {
            "group": "Success 200",
            "type": "stepObj[]",
            "optional": false,
            "field": "steps",
            "description": "<p>Step objects</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": false,
            "field": "team1",
            "description": "<p>Team object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team1.score",
            "description": "<p>Team score</p>"
          },
          {
            "group": "Success 200",
            "type": "LineupObj",
            "optional": true,
            "field": "team1.lineup",
            "description": "<p>Team lineup (public visibility activate one hour before match)</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": false,
            "field": "team2",
            "description": "<p>Like 'team1' parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "scoreObj[]",
            "optional": false,
            "field": "scores",
            "description": "<p>Score objects.  'map', 'team1Players' and 'team2Players' sub-objects are optional.</p>"
          },
          {
            "group": "Success 200",
            "type": "casterObj[]",
            "optional": false,
            "field": "casters",
            "description": "<p>Caster objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nextmatchWinner",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nextmatchWinner.id",
            "description": "<p>Next matchID played by the winner of this match. Can be null</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nextmatchLoser",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nextmatchLoser.id",
            "description": "<p>Next matchID played by the loser of this match. Can be null</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/matchs",
    "title": "Get matchs",
    "name": "GetMatchs",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "poolID",
            "description": "<p>[Query] Filter by poolID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bracketID",
            "description": "<p>[Query] Filter by bracketID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segmentsID",
            "description": "<p>[Query] Filter by segmentsID (list of segmentID, splited by a comma ',')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "teamID",
            "description": "<p>[Query] Filter by teamID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "challengesID",
            "description": "<p>[Query] Filter by challengesID (list of challengeID, splited by a comma ',')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "casterID",
            "description": "<p>[Query] Filter by casterID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lineupID",
            "description": "<p>[Query] Filter by lineupID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scheduled",
            "description": "<p>[Query] Filter by scheduled status: Allowed values: ['future', 'past', 'live', 'none' (not scheduled), 'not-schedulable' (cannot be schedule. example: one team was deleted)]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "minMatchsDate",
            "description": "<p>[Query] Filter match schedule after this date (unix timestamp)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "maxMatchsDate",
            "description": "<p>[Query] Filter match schedule before this date (unix timestamp)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "active",
            "description": "<p>[Query] Return matches with actives steps only. Allowed values: ['0': no, '1': yes]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>[Query] Limit the number of results</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>[Query] Result page (offset). First page: 0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>[Query] Output order. Allowed values: ['asc', 'desc']</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cache",
            "description": "<p>[Query] Allow cache usage to optimize reponse time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Array of MatchObj (see Get Match route)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Match ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "matchDate",
            "description": "<p>Timestamp or null: match date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teamID_winner",
            "description": "<p>Can be teamID_1, teamID_2 or null</p>"
          },
          {
            "group": "Success 200",
            "type": "challengeObj",
            "optional": false,
            "field": "challenge",
            "description": "<p>Challenge object</p>"
          },
          {
            "group": "Success 200",
            "type": "segmentObj",
            "optional": false,
            "field": "segment",
            "description": "<p>Segment object</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": false,
            "field": "team1",
            "description": "<p>Team object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team1.score",
            "description": "<p>Team score</p>"
          },
          {
            "group": "Success 200",
            "type": "LineupObj",
            "optional": true,
            "field": "team1.lineup",
            "description": "<p>Team lineup (public visibility activate one hour before match)</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": false,
            "field": "team2",
            "description": "<p>Like 'team1' parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "scoreObj[]",
            "optional": false,
            "field": "scores",
            "description": "<p>Score objects. 'map', 'team1Players' and 'team2Players' sub-objects are optional.</p>"
          },
          {
            "group": "Success 200",
            "type": "casterObj[]",
            "optional": false,
            "field": "casters",
            "description": "<p>Caster objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "round",
            "description": "<p>Only for bracket. Match round (first is round 1. Last round = final)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "position",
            "description": "<p>Only for bracket. Each match have a position for a round.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "type",
            "description": "<p>Only for bracket. 'winner' or 'loser'.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/getMatchs.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/matchs/:matchID/forfeit",
    "title": "Set forfeit",
    "name": "PostForfeit",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "teamsForfeit",
            "description": "<p>[Body] List of team. 'team1,team2' for 2 forfeit. (doesn't remplace team1 by ID, use 'team1') (list of string, splited by a comma ',')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Apply</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/postForfeit.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/matchs/:idMatch/casts",
    "title": "Assign caster (me) to the match",
    "name": "PostMatchCasts",
    "group": "Matchs",
    "description": "<p>Up to 7 days before the match, only casters can book this match. Last 7 days, caster and match's players can book this match</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMatch",
            "description": "<p>[URL] Match ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Cast accepted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Conflict</p>"
          }
        ],
        "423": [
          {
            "group": "423",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Match cant be modified</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/postCast.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:idChallenge/pools/:idPool/teams/:idTeam/matchs/:idMatch/dates",
    "title": "Propose a match schedule",
    "name": "PostMatchDate",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] My team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMatch",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>[Body] Proposed date (timestamp)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Proposed date created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/postDate.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/matchs/:matchID/scores",
    "title": "Add a score",
    "name": "PostMatchScores",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>[Body] Add score json object. Included teamIDs, and each scores as array. team1Players and team2Players per score are optional according championship rules. Format: {&quot;scores&quot;: [{&quot;team1&quot;: 0, &quot;team2&quot;: 0, &quot;map&quot;: &lt;map_id&gt;, &quot;team1Players&quot;: [userID], &quot;team2Players&quot;: [userID]}]}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Proposed score saved</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/postScores.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/matchs/:matchID",
    "title": "Update match",
    "name": "PutMatch",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "team1",
            "description": "<p>[Body] Update teamID for team1. Send 'null' or empty value remove current team.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "team2",
            "description": "<p>[Body] Update teamID for team2. Send 'null' or empty value remove current team.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Apply</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/putMatch.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/matchs/:matchID/dates/:dateID",
    "title": "Reply to a match schedule (accept or refuse)",
    "name": "ReplyMatchDate",
    "group": "Matchs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dateID",
            "description": "<p>[URL] Date ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamID",
            "description": "<p>[Body] Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accepted",
            "description": "<p>[Body] 0: date refused / 1: date accepted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Proposed date created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/replyDate.py",
    "groupTitle": "Matchs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/organizations/current/communications/:idCommunication",
    "title": "Delete communication",
    "name": "DeleteOrganizationCommunication",
    "group": "Organizations",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>None</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/deleteCommunication.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/organizations/current",
    "title": "Get an organization",
    "name": "GetOrganization",
    "group": "Organizations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>Domain name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secondaryDomain",
            "description": "<p>Alternative domain</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "game",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game.name",
            "description": "<p>Game name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "externalLinks",
            "description": "<p>ExternalLinks object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Organization not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/getByID.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/organizations/current/communications",
    "title": "Get organization communications",
    "name": "GetOrganizationCommunications",
    "group": "Organizations",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "todo",
            "description": "<p>todo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Organization not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/getCommunications.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/organizations/current/configs",
    "title": "Get organization configs",
    "name": "GetOrganizationConfigs",
    "group": "Organizations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfTeamsPerUser",
            "description": "<p>numberOfTeamsPerUser</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minMembersPerTeam",
            "description": "<p>minMembersPerTeam</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxMembersPerTeam",
            "description": "<p>maxMembersPerTeam</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxPlayersPerTeam",
            "description": "<p>maxPlayersPerTeam</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "paypalBusinessID",
            "description": "<p>paypalBusinessID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "matchStatusLiveBeforeMin",
            "description": "<p>matchStatusLiveBeforeMin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "matchStatusLiveAfterMin",
            "description": "<p>matchStatusLiveAfterMin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "matchLineupsRequiredToValidateScore",
            "description": "<p>matchLineupsRequiredToValidateScore</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lineupMinStartingPlayers",
            "description": "<p>lineupMinStartingPlayers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lineupMaxStartingPlayers",
            "description": "<p>lineupMaxStartingPlayers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lineupMinSubstitutesPlayers",
            "description": "<p>lineupMinSubstitutesPlayers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lineupMaxSubstitutesPlayers",
            "description": "<p>lineupMaxSubstitutesPlayers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lineupLockedBeforeMin",
            "description": "<p>lineupLockedBeforeMin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceLentDurationDays",
            "description": "<p>marketplaceLentDurationDays</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceShowUsersWithoutTeam",
            "description": "<p>marketplaceShowUsersWithoutTeam</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceShowTicketsWithActiveStepOnly",
            "description": "<p>marketplaceShowTicketsWithActiveStepOnly</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceLentEnabled",
            "description": "<p>marketplaceLentEnabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceTransferEnabled",
            "description": "<p>marketplaceTransferEnabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceLentUpperSegmentAllowed",
            "description": "<p>marketplaceLentUpperSegmentAllowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceLentLowerSegmentAllowed",
            "description": "<p>marketplaceLentLowerSegmentAllowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceTransferUpperSegmentAllowed",
            "description": "<p>marketplaceTransferUpperSegmentAllowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "marketplaceTransferLowerSegmentAllowed",
            "description": "<p>marketplaceTransferLowerSegmentAllowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "thirdpartiesRequired",
            "description": "<p>object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "thirdpartiesRequired.discord",
            "description": "<p>Players in this organization must sync discord</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "thirdpartiesRequired.battlenet",
            "description": "<p>Players in this organization must sync battlenet</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "requiredPhone",
            "description": "<p>Players in this organization must sync phone number</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/getConfigs.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/organizations/current/communications",
    "title": "Create communication",
    "name": "PostOrganizationCommunication",
    "group": "Organizations",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>[Body] Json with valid languages as {&quot;en&quot;: &quot;my text&quot;, &quot;fr&quot;: &quot;my text&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>[Body] Timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "endDate",
            "description": "<p>[Body] Timestamp</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>See communication object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/postCommunication.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/organizations/current",
    "title": "Put organization",
    "name": "PutOrganization",
    "group": "Organizations",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "domain",
            "description": "<p>[Body] sub-domain. alphanum only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>[Body] Organization color</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>[Body] Organization profile image</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "icon",
            "description": "<p>[Body] Organization favicon</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/putOrganization.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/organizations/current/communications/:id",
    "title": "Put communication",
    "name": "PutOrganizationCommunication",
    "group": "Organizations",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Communication ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>[Body] Json with valid languages as {&quot;en&quot;: &quot;my text&quot;, &quot;fr&quot;: &quot;my text&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "startDate",
            "description": "<p>[Body] Timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "endDate",
            "description": "<p>[Body] Timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>[Body] Communication image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "todo",
            "description": "<p>todo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/putCommunication.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/organizations/current/configs",
    "title": "Put organization configs",
    "name": "PutOrganizationConfigs",
    "group": "Organizations",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "numberOfTeamsPerUser",
            "description": "<p>[Body] numberOfTeamsPerUser</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "minMembersPerTeam",
            "description": "<p>[Body] minMembersPerTeam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "maxMembersPerTeam",
            "description": "<p>[Body] maxMembersPerTeam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "maxPlayersPerTeam",
            "description": "<p>[Body] maxPlayersPerTeam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "paypalBusinessID",
            "description": "<p>[Body] paypalBusinessID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "matchStatusLiveBeforeMin",
            "description": "<p>[Body] matchStatusLiveBeforeMin</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "matchStatusLiveAfterMin",
            "description": "<p>[Body] matchStatusLiveAfterMin</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "matchLineupsRequiredToValidateScore",
            "description": "<p>[Body] matchLineupsRequiredToValidateScore (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lineupMinStartingPlayers",
            "description": "<p>[Body] lineupMinStartingPlayers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lineupMaxStartingPlayers",
            "description": "<p>[Body] lineupMaxStartingPlayers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lineupMinSubstitutesPlayers",
            "description": "<p>[Body] lineupMinSubstitutesPlayers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lineupMaxSubstitutesPlayers",
            "description": "<p>[Body] lineupMaxSubstitutesPlayers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lineupLockedBeforeMin",
            "description": "<p>[Body] lineupLockedBeforeMin</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceLentDurationDays",
            "description": "<p>[Body] marketplaceLentDurationDays</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceShowUsersWithoutTeam",
            "description": "<p>[Body] marketplaceShowUsersWithoutTeam (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceShowTicketsWithActiveStepOnly",
            "description": "<p>[Body] marketplaceShowTicketsWithActiveStepOnly (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceLentEnabled",
            "description": "<p>[Body] marketplaceLentEnabled (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceTransferEnabled",
            "description": "<p>[Body] marketplaceTransferEnabled (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceLentUpperSegmentAllowed",
            "description": "<p>[Body] marketplaceLentUpperSegmentAllowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceLentLowerSegmentAllowed",
            "description": "<p>[Body] marketplaceLentLowerSegmentAllowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceTransferUpperSegmentAllowed",
            "description": "<p>[Body] marketplaceTransferUpperSegmentAllowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceTransferLowerSegmentAllowed",
            "description": "<p>[Body] marketplaceTransferLowerSegmentAllowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "thirdpartiesRequiredDiscord",
            "description": "<p>[Body] Players in this organization must sync discord (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "thirdpartiesRequiredBattlenet",
            "description": "<p>[Body] Players in this organization must sync battlenet (0/1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "requiredPhone",
            "description": "<p>[Body] Players in this organization must sync battlenet (0/1)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/putConfigs.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/organizations/current/external-links",
    "title": "Put organization external links",
    "name": "PutOrganizationsExternalLinks",
    "group": "Organizations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "discord",
            "description": "<p>[Body] Discord page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "facebook",
            "description": "<p>[Body] Facebook page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tiktok",
            "description": "<p>[Body] Tiktok page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "twitter",
            "description": "<p>[Body] Twitter page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "instagram",
            "description": "<p>[Body] Instagram page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "youtube",
            "description": "<p>[Body] Youtube page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "twitch",
            "description": "<p>[Body] Twitch page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>[Body] Website link (or empty string to remove)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Conflict</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/organizations/putOrganizationExternalLinks.py",
    "groupTitle": "Organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:idChallenge/pools/:idPool",
    "title": "Delete a pool",
    "name": "DeletePool",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Pool Deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/deletePool.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:idChallenge/poolsconfigs/:idPoolConfigs",
    "title": "Delete a poolConfigs",
    "name": "DeletePoolConfigs",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPoolConfigs",
            "description": "<p>[URL] PoolConfigs ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>PoolConfigs delete</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Pool name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/deletePoolConfigs.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:idChallenge/pools/:idPool/teams/:idTeam",
    "title": "Remove team from the pool (delete matchs)",
    "name": "DeletePoolTeams",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] Team ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Team removed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/poolteamsDeleteTeam.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/pools/:idPool",
    "title": "Get pool",
    "name": "GetPool",
    "group": "Pools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": true,
            "field": "stats",
            "description": "<p>[Query] Return pool stats</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Pool</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "segmentID",
            "description": "<p>ID of the Segement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "stepsID",
            "description": "<p>List of stepsID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pool name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "poolConfigs",
            "description": "<p>poolConfigs object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "stats",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsCompleted",
            "description": "<p>Number of matchs with scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsPlayedWithoutScores",
            "description": "<p>Number of played matchs without scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsPlayedPercent",
            "description": "<p>[DEPRECATED] Like 'matchsPlayed', as percent</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsScheduled",
            "description": "<p>Number of scheduled matchs  (scheduled but not played)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsScheduledPercent",
            "description": "<p>[DEPRECATED] Like 'matchsScheduled', as percent</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsNotScheduled",
            "description": "<p>Number of matches waiting to be scheduled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsNotScheduledPercent",
            "description": "<p>[DEPRECATED] See 'scheduledPercent'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsNotSchedulable",
            "description": "<p>Number of not schedulable matchs (example: if a team was deleted)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matchsNotSchedulablePercent",
            "description": "<p>[DEPRECATED] Like 'matchsNotSchedulable', as percent</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/getPool.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/poolsconfigs/:id",
    "title": "Get a poolConfigs",
    "name": "GetPoolConfigs",
    "group": "Pools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPoolConfigs",
            "description": "<p>[URL] PoolConfigs ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>PoolConfigs ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ChallengeID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Format</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "formatValues",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "formatValues.minScoresPerMatch",
            "description": "<p>Minumum number of scores per match</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "formatValues.maxScoresPerMatch",
            "description": "<p>Maximum number of scores per match</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfPlayersPerScore",
            "description": "<p>Number of players per score</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/getPoolConfigs.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/pools/:idPool/ranking",
    "title": "Get pool ranking",
    "name": "GetPoolRanking",
    "group": "Pools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/getPoolRanking.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>List of TeamPoints</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "items.team",
            "description": "<p>TeamObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "items.stats",
            "description": "<p>TeamPoints</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsAVG",
            "description": "<p>For each score in each match: win -&gt; +2; draw -&gt; +1; loose -&gt; +0</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsSUM",
            "description": "<p>Sum of points for each scores in each machs</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsVictories",
            "description": "<p>Sum of victories for each maps played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsDefeats",
            "description": "<p>Sum of defeats for each maps played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsDraws",
            "description": "<p>Sum of draws for each maps played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsDiff",
            "description": "<p>MapsVictories - MapsDefeats</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsVictories",
            "description": "<p>Sum of victories for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsDefeats",
            "description": "<p>Sum of defeats for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsDraws",
            "description": "<p>Sum of draws for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.MatchForfeits",
            "description": "<p>Sum of forfeit for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsAVG",
            "description": "<p>For each match: win -&gt; +2; draw -&gt; +1; loose -&gt; +0; forfeit -&gt; -1</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsTotal",
            "description": "<p>Total number of matchs to be played by this team in this pool</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsPlayed",
            "description": "<p>Current number of matchs played by this team in this pool</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsDiff",
            "description": "<p>MatchsVictories - MatchsDefeats</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/pools/:idPool/teams",
    "title": "List teams added in the pool",
    "name": "GetPoolTeams",
    "group": "Pools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of team objects. See team object in GET /teams/:id (Some values may not be present). New entry: poolStats</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/poolteamsGetTeams.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/pools/:idPool/teams/available",
    "title": "List teams ready to be added in the pool",
    "name": "GetPoolTeamsAvailable",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of team objects. See team object in GET /teams/:id (Some values may not be present)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/poolteamsGetTeamsAvailable.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/pools",
    "title": "List pools",
    "name": "ListPool",
    "group": "Pools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": true,
            "field": "stats",
            "description": "<p>[Query] Return stats for each pools</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "segmentsID",
            "description": "<p>[Query] Filter by segmentID with comma (example: 1,2,3)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "stepsID",
            "description": "<p>[Query] Filter by stepID with comma (example: 1,2,3)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body.pools",
            "description": "<p>Array of pools objects. See pool object in GET /challenges/:id/pools</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "body.stats",
            "description": "<p>See stats object in GET /challenges/:id/pools/:id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/getPools.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/poolsconfigs",
    "title": "List poolsConfigs",
    "name": "ListPoolConfigs",
    "group": "Pools",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body.poolsconfigs",
            "description": "<p>Array of poolConfigs objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/getPoolsConfigs.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:id/pools",
    "title": "Create a pool",
    "name": "PostPool",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Pool name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "segmentID",
            "description": "<p>[Body] Segment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "poolConfigsID",
            "description": "<p>[Body] PoolConfigs ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stepsID",
            "description": "<p>[Body] List of stepID with comma (example: 1,2,3)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Pool object. See pool object in GET /challenges/:id/pools</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Pool name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/postPool.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:id/poolsconfigs",
    "title": "Create a poolConfigs",
    "name": "PostPoolConfigs",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Configs name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>[Body] Format (BO3, BO5, ..)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfPlayersPerScore",
            "description": "<p>[Body] number of players per score</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>PoolConfigs created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Pool name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/postPoolConfigs.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:idChallenge/pools/:idPool/teams",
    "title": "Add team in the pool",
    "name": "PostPoolTeams",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamsID",
            "description": "<p>[Body] List of team id (list of string, splited by a comma ',')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Team added</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/poolteamsPostTeam.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:idChallenge/pools/:idPool",
    "title": "Update a pool",
    "name": "PutPool",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPool",
            "description": "<p>[URL] Pool ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Pool name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "segmentID",
            "description": "<p>[Body] Segment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "poolConfigsID",
            "description": "<p>[Body] poolConfigs ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "stepsID",
            "description": "<p>[Body] List of stepID with comma (example: 1,2,3)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Pool updated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Pool name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/putPool.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:idChallenge/poolsconfigs/:idPoolConfigs",
    "title": "Update a poolConfigs",
    "name": "PutPoolConfigs",
    "group": "Pools",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPoolConfigs",
            "description": "<p>[URL] PoolConfigs ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Configs name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "description": "<p>[Body] Format (BO3, BO5, ..)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfPlayersPerScore",
            "description": "<p>[Body] number of players per score</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>PoolConfigs updated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Pool name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/pools/putPoolConfigs.py",
    "groupTitle": "Pools",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:idChallenge/segments/:idSegment",
    "title": "Delete a segment",
    "name": "DeleteSegment",
    "group": "Segments",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idSegment",
            "description": "<p>[URL] Segment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Segment name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Segment deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/segments/deleteSegment.py",
    "groupTitle": "Segments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/segments",
    "title": "List segments",
    "name": "GetSegments",
    "group": "Segments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of segments objects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>No segments created</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/segments/getSegments.py",
    "groupTitle": "Segments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:idChallenge/segments",
    "title": "Create a segment (like Division1 or Paris)",
    "name": "PostSegment",
    "group": "Segments",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Segment name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>[Body] Segment position (lower is better. min value: 1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Segment created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Segment name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/segments/postSegment.py",
    "groupTitle": "Segments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:idChallenge/segments/:idSegment",
    "title": "Update a segment",
    "name": "PutSegment",
    "group": "Segments",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idSegment",
            "description": "<p>[URL] Segment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Segment name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Segment updated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Segment name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/segments/putSegment.py",
    "groupTitle": "Segments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:idChallenge/steps/:idStep",
    "title": "Delete a step",
    "name": "DeleteStep",
    "group": "Steps",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idStep",
            "description": "<p>[URL] Step ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Step deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Step not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/deleteStep.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/steps/:idStep",
    "title": "Get a step",
    "name": "GetStep",
    "group": "Steps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idStep",
            "description": "<p>[URL] Step ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/getStep.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Step</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the Step (register, play, break, ..)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start unix timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endDate",
            "description": "<p>End unix timestamp</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/steps/:idStep/ranking",
    "title": "Get step ranking",
    "name": "GetStepRanking",
    "group": "Steps",
    "description": "<p>It's not a real time, data is cached for 5 minutes</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idStep",
            "description": "<p>[URL] Step ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "segmentsID",
            "description": "<p>[Query] Filter by segmentsID (splited by ,)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge or step not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/getStepRanking.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>List of TeamPoints</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "items.team",
            "description": "<p>TeamObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "items.stats",
            "description": "<p>TeamPoints</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsAVG",
            "description": "<p>For each score in each match: win -&gt; +2; draw -&gt; +1; loose -&gt; +0</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsSUM",
            "description": "<p>Sum of points for each scores in each machs</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsVictories",
            "description": "<p>Sum of victories for each maps played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsDefeats",
            "description": "<p>Sum of defeats for each maps played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsDraws",
            "description": "<p>Sum of draws for each maps played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.mapsDiff",
            "description": "<p>MapsVictories - MapsDefeats</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsVictories",
            "description": "<p>Sum of victories for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsDefeats",
            "description": "<p>Sum of defeats for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsDraws",
            "description": "<p>Sum of draws for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.MatchForfeits",
            "description": "<p>Sum of forfeit for each matchs played (not for each scores in each matchs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsAVG",
            "description": "<p>For each match: win -&gt; +2; draw -&gt; +1; loose -&gt; +0; forfeit -&gt; -1</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsTotal",
            "description": "<p>Total number of matchs to be played by this team in this pool</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsPlayed",
            "description": "<p>Current number of matchs played by this team in this pool</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "items.stats.matchsDiff",
            "description": "<p>MatchsVictories - MatchsDefeats</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/steps",
    "title": "List steps",
    "name": "GetSteps",
    "group": "Steps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of step objects. See step object in GET /challenges/:id/steps/:id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>No steps in this challenge</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/getSteps.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/steps/teams-available",
    "title": "List teams ready to be added in steps",
    "name": "GetStepsTeamsAvailable",
    "group": "Steps",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stepsID",
            "description": "<p>[Query] Filter by stepID with comma (example: 1,2,3)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of team objects. See team object in GET /teams/:id (Some values may not be present)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/stepsteamsGetTeamsAvailable.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:id/steps",
    "title": "Create a step",
    "name": "PostStep",
    "group": "Steps",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Step name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>[Body] Step type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start",
            "description": "<p>[Body] Date start</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end",
            "description": "<p>[Body] Date end</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Step not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Step name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/postStep.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Step</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the Step (register, play, break, ..)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start unix timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endDate",
            "description": "<p>End unix timestamp</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:idChallenge/steps/:idStep",
    "title": "Update a step",
    "name": "PutStep",
    "group": "Steps",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idStep",
            "description": "<p>[URL] Step ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Step name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>[Body] Step type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>[Body] Date start. 'end' parameter must be present</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>[Body] Date end. 'start' parameter must be present</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Step not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Step name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/steps/putStep.py",
    "groupTitle": "Steps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Step</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the Step (register, play, break, ..)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start unix timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endDate",
            "description": "<p>End unix timestamp</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:id/members",
    "title": "Add user to a team",
    "name": "AddTeamMember",
    "group": "Teams",
    "permission": [
      {
        "name": "organization-owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>[Body] UserID or username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>User added in team</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User or team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User is already invited or already member of the team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/addTeamMember.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:id/apply",
    "title": "Apply to join the team",
    "name": "ApplyTeamMember",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>Invitation sent</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User is already invited or already member of the team</p>"
          }
        ],
        "423": [
          {
            "group": "423",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>This team is not looking for new members</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/applyTeamMember.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:idTeam/ticketspurchased/:ticketsPurchasedID",
    "title": "Assign team ticket to user",
    "name": "AssignTeamTickets",
    "group": "Teams",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL]  Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticketsPurchasedID",
            "description": "<p>[URL]  Tickets purchased id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idUser",
            "description": "<p>[Body] User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<p>Team ticket assigned</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/ticketsPurchasedAssign.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/teams/:id",
    "title": "Delete a team",
    "name": "DeleteTeam",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Team ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Team deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/deleteTeam.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/teams/:id/follow",
    "title": "Unfollow team",
    "name": "DeleteTeamFollow",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Team ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/removeTeamFollow.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams/:id",
    "title": "Get a team",
    "name": "GetTeam",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team ID or name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/getTeamByID.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nationality",
            "description": "<p>Team nationality</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recruitment",
            "description": "<p>1 = yes, 0 = no</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "members",
            "description": "<p>List of members including team roles, tags and ticket purchased for each member</p>"
          },
          {
            "group": "Success 200",
            "type": "UserObj",
            "optional": false,
            "field": "members.user",
            "description": "<p>UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "members.tags",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "List[String]",
            "optional": false,
            "field": "members.tags.gameRoles",
            "description": "<p>Team member game roles</p>"
          },
          {
            "group": "Success 200",
            "type": "List[String]",
            "optional": false,
            "field": "members.roles",
            "description": "<p>Team member roles</p>"
          },
          {
            "group": "Success 200",
            "type": "List<a href=\"light\">TicketsPurchasedObj</a>",
            "optional": false,
            "field": "members.ticketsPurchased",
            "description": "<p>Team member tickets</p>"
          },
          {
            "group": "Success 200",
            "type": "List[LentMemberObj]",
            "optional": false,
            "field": "members.lent",
            "description": "<p>List of teams where the player is loaned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "externalLinks",
            "description": "<p>ExternalLinks object</p>"
          },
          {
            "group": "Success 200",
            "type": "List[LentMemberObj]",
            "optional": false,
            "field": "membersLent",
            "description": "<p>List of members lent to my team</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.id",
            "description": "<p>Lent ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "membersLent.challenge",
            "description": "<p>Challenge object (can be incomplete), lent is challenge-scoped</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.challenge.id",
            "description": "<p>ChallengeID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.expirationDate",
            "description": "<p>Lent expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.registerDate",
            "description": "<p>Lent register date</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamMemberObj",
            "optional": false,
            "field": "membersLent.member",
            "description": "<p>Lent member object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": false,
            "field": "membersLent.teamSource",
            "description": "<p>Source team object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": false,
            "field": "membersLent.teamDest",
            "description": "<p>Dest team object</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": false,
            "field": "membersLent.segmentSource",
            "description": "<p>Source segment</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": false,
            "field": "membersLent.segmentDest",
            "description": "<p>Dest segment</p>"
          },
          {
            "group": "Success 200",
            "type": "List[SegmentObj]",
            "optional": false,
            "field": "segments",
            "description": "<p>List of segment object when the team have played</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "followers",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "followers.number",
            "description": "<p>Number of followers</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "followers.followed",
            "description": "<p>DEPRECATED. True if i follow this team. False if i don't follow this team. Null if i'm not connected.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams/:id",
    "title": "Get team contacts",
    "name": "GetTeamContact",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team ID or name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>UserID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/getTeamContacts.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams/:id/histories",
    "title": "Get a team public histories",
    "name": "GetTeamHistories",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>[Query] Result page (offset). First page: 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>[Query] Provide this value (find on body's page=0) when requesting page &gt;= 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/getTeamHistories.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lines",
            "description": "<p>Total lines available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total pages available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>Provide this value as query parameter when requesting page &gt;= 1</p>"
          },
          {
            "group": "Success 200",
            "type": "HistoryObj[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of history object. Sometimes more objects than expected may be present.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>History ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>History type</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data.action",
            "description": "<p>Details as json format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.visibility",
            "description": "<p>Who can see this history</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.registerDate",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "userObj",
            "optional": true,
            "field": "data.user",
            "description": "<p>Present on user's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": true,
            "field": "data.team",
            "description": "<p>Present on team's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "matchObj(light)",
            "optional": true,
            "field": "data.match",
            "description": "<p>Present on match's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "ChallengeObj",
            "optional": true,
            "field": "data.challenge",
            "description": "<p>Challenge object</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams/:id/stats",
    "title": "Get team stats",
    "name": "GetTeamStats",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "points",
            "description": "<p>PointsObj. See */ranking pages for details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/getTeamStats.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams",
    "title": "List teams",
    "name": "GetTeams",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>[Query] If 'followers', output ordered by number of followers</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of team objects. See team object in GET /teams/:id (Some values may not be present)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>No teams created</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/getTeams.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:id/invitations",
    "title": "Invite user to join the team",
    "name": "InviteTeamMember",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "battlenetBtag",
            "description": "<p>[Body] DEPREACATED User Battlenet Btag. Provide this param or userID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>[Body] User ID, username or Battlenet Btag</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>Invitation sent</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User is already invited or already member of the team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/inviteTeamMember.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams/:id/invitations",
    "title": "List team member invitations",
    "name": "ListTeamMemberInvitations",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]     Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation ID (Array[InvitedMemberObject])</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "invitationType",
            "description": "<p>Invitation type. Allowed values: ['invitation', 'transfer', 'lent']</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "challengeID",
            "description": "<p>Scope of this invitation. Could be present for all transfer and lent. Not for team invitation.</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "teamAccepted",
            "description": "<p>0 if invitation is sent by the user / 1 by the team</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "userAccepted",
            "description": "<p>0 if invitation is sent by the team / 1 by the user)</p>"
          },
          {
            "group": "200",
            "type": "TeamObj",
            "optional": false,
            "field": "team",
            "description": "<p>Destination team object</p>"
          },
          {
            "group": "200",
            "type": "TeamObj",
            "optional": true,
            "field": "teamSource",
            "description": "<p>Source team object</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "teamSource.additionalFields",
            "description": "<p>Additional fields</p>"
          },
          {
            "group": "200",
            "type": "MemberObj",
            "optional": true,
            "field": "teamSource.additionalFields.member",
            "description": "<p>MemberObj</p>"
          },
          {
            "group": "200",
            "type": "SegmentObj",
            "optional": true,
            "field": "teamSource.additionalFields.segment",
            "description": "<p>SegmentObj</p>"
          },
          {
            "group": "200",
            "type": "Userobj",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          },
          {
            "group": "200",
            "type": "SegmentObj",
            "optional": true,
            "field": "segment",
            "description": "<p>Destination team: segment object</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "lentExpirationDate",
            "description": "<p>Lent expiration (timestamp). After this date, user cannot play destTeam's matchs</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Invitation date (timestamp)</p>"
          }
        ],
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>No invitations</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/invitesListTeamMember.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/teams/:idTeam/ticketspurchased",
    "title": "List team tickets",
    "name": "ListTeamTickets",
    "group": "Teams",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] Team id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "TicketPurchasedObj[]",
            "optional": false,
            "field": "body",
            "description": "<p>Array of Team tickets purchased (include personal and team tickets)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>No tickets purchased</p>"
          }
        ],
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/ticketsPurchasedList.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams",
    "title": "Create a team",
    "name": "PostTeam",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Team name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>[Body] Team nationality (2 characteres, like 'us')</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team name already exist or user can't create more teams</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/postTeam.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nationality",
            "description": "<p>Team nationality</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recruitment",
            "description": "<p>1 = yes, 0 = no</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "members",
            "description": "<p>List of members including team roles, tags and ticket purchased for each member</p>"
          },
          {
            "group": "Success 200",
            "type": "UserObj",
            "optional": false,
            "field": "members.user",
            "description": "<p>UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "members.tags",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "List[String]",
            "optional": false,
            "field": "members.tags.gameRoles",
            "description": "<p>Team member game roles</p>"
          },
          {
            "group": "Success 200",
            "type": "List[String]",
            "optional": false,
            "field": "members.roles",
            "description": "<p>Team member roles</p>"
          },
          {
            "group": "Success 200",
            "type": "List<a href=\"light\">TicketsPurchasedObj</a>",
            "optional": false,
            "field": "members.ticketsPurchased",
            "description": "<p>Team member tickets</p>"
          },
          {
            "group": "Success 200",
            "type": "List[LentMemberObj]",
            "optional": false,
            "field": "members.lent",
            "description": "<p>List of teams where the player is loaned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "externalLinks",
            "description": "<p>ExternalLinks object</p>"
          },
          {
            "group": "Success 200",
            "type": "List[LentMemberObj]",
            "optional": false,
            "field": "membersLent",
            "description": "<p>List of members lent to my team</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.id",
            "description": "<p>Lent ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "membersLent.challenge",
            "description": "<p>Challenge object (can be incomplete), lent is challenge-scoped</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.challenge.id",
            "description": "<p>ChallengeID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.expirationDate",
            "description": "<p>Lent expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.registerDate",
            "description": "<p>Lent register date</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamMemberObj",
            "optional": false,
            "field": "membersLent.member",
            "description": "<p>Lent member object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": false,
            "field": "membersLent.teamSource",
            "description": "<p>Source team object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": false,
            "field": "membersLent.teamDest",
            "description": "<p>Dest team object</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": false,
            "field": "membersLent.segmentSource",
            "description": "<p>Source segment</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": false,
            "field": "membersLent.segmentDest",
            "description": "<p>Dest segment</p>"
          },
          {
            "group": "Success 200",
            "type": "List[SegmentObj]",
            "optional": false,
            "field": "segments",
            "description": "<p>List of segment object when the team have played</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "followers",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "followers.number",
            "description": "<p>Number of followers</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "followers.followed",
            "description": "<p>DEPRECATED. True if i follow this team. False if i don't follow this team. Null if i'm not connected.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:id/follow",
    "title": "Follow team",
    "name": "PostTeamFollow",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Team ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/postTeamFollow.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/teams/:id",
    "title": "Update a team",
    "name": "PutTeam",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Team name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nationality",
            "description": "<p>[Body] Team nationality (2 characteres, like 'us')</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "recruitment",
            "description": "<p>[Body] Team recruitment (1 = yes, 0 = no)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>[Body] Team profile image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/putTeam.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nationality",
            "description": "<p>Team nationality</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recruitment",
            "description": "<p>1 = yes, 0 = no</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Team</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "members",
            "description": "<p>List of members including team roles, tags and ticket purchased for each member</p>"
          },
          {
            "group": "Success 200",
            "type": "UserObj",
            "optional": false,
            "field": "members.user",
            "description": "<p>UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "members.tags",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "List[String]",
            "optional": false,
            "field": "members.tags.gameRoles",
            "description": "<p>Team member game roles</p>"
          },
          {
            "group": "Success 200",
            "type": "List[String]",
            "optional": false,
            "field": "members.roles",
            "description": "<p>Team member roles</p>"
          },
          {
            "group": "Success 200",
            "type": "List<a href=\"light\">TicketsPurchasedObj</a>",
            "optional": false,
            "field": "members.ticketsPurchased",
            "description": "<p>Team member tickets</p>"
          },
          {
            "group": "Success 200",
            "type": "List[LentMemberObj]",
            "optional": false,
            "field": "members.lent",
            "description": "<p>List of teams where the player is loaned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "externalLinks",
            "description": "<p>ExternalLinks object</p>"
          },
          {
            "group": "Success 200",
            "type": "List[LentMemberObj]",
            "optional": false,
            "field": "membersLent",
            "description": "<p>List of members lent to my team</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.id",
            "description": "<p>Lent ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "membersLent.challenge",
            "description": "<p>Challenge object (can be incomplete), lent is challenge-scoped</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.challenge.id",
            "description": "<p>ChallengeID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.expirationDate",
            "description": "<p>Lent expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membersLent.registerDate",
            "description": "<p>Lent register date</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamMemberObj",
            "optional": false,
            "field": "membersLent.member",
            "description": "<p>Lent member object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": false,
            "field": "membersLent.teamSource",
            "description": "<p>Source team object</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj",
            "optional": false,
            "field": "membersLent.teamDest",
            "description": "<p>Dest team object</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": false,
            "field": "membersLent.segmentSource",
            "description": "<p>Source segment</p>"
          },
          {
            "group": "Success 200",
            "type": "SegmentObj",
            "optional": false,
            "field": "membersLent.segmentDest",
            "description": "<p>Dest segment</p>"
          },
          {
            "group": "Success 200",
            "type": "List[SegmentObj]",
            "optional": false,
            "field": "segments",
            "description": "<p>List of segment object when the team have played</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "followers",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "followers.number",
            "description": "<p>Number of followers</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "followers.followed",
            "description": "<p>DEPRECATED. True if i follow this team. False if i don't follow this team. Null if i'm not connected.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/teams/:id/external-links",
    "title": "Update a team external links",
    "name": "PutTeamExternalLinks",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "discord",
            "description": "<p>[Body] Discord page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "facebook",
            "description": "<p>[Body] Facebook page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tiktok",
            "description": "<p>[Body] Tiktok page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "twitter",
            "description": "<p>[Body] Twitter page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "instagram",
            "description": "<p>[Body] Instagram page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "youtube",
            "description": "<p>[Body] Youtube page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "twitch",
            "description": "<p>[Body] Twitch page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>[Body] Website link (or empty string to remove)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Conflict</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/putTeamExternalLinks.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/teams/:idTeam/members/:idUser",
    "title": "Remove a user from the team",
    "name": "RemoveTeamMember",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMember",
            "description": "<p>[URL] User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>User removed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ],
        "423": [
          {
            "group": "423",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Promotes a team member as owner before leaving your team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/removeTeamMember.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:idTeam/members/:idMember/roles",
    "title": "Add role to user",
    "name": "TeamMemberRolesAdd",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMember",
            "description": "<p>[URL] Member id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>[Body] Role. Allowed values: ['owner', 'president', 'vice president', 'staff', 'communication', 'esport director', 'manager', 'assistant manager', 'head coach', 'video analyst', 'mental coach', 'captain']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>Role added</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User already have this role</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/postMemberTeamRole.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/teams/:idTeam/members/:idMember/roles/:roleName",
    "title": "Remove role to user",
    "name": "TeamMemberRolesRemove",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMember",
            "description": "<p>[URL] Member id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>[URL] Role. Allowed values: ['owner', '...']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>Role removed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User haven't this role</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/removeMemberTeamRole.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/teams/:idTeam/members/:idMember/tags",
    "title": "Change user tags",
    "name": "TeamMemberTagsPut",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL] Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMember",
            "description": "<p>[URL] Member id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gameRoles",
            "description": "<p>[Body] List of game roles with comma. Allowed values: ['main tank', 'off tank', 'dps hitscan', 'dps projectile', 'main heal', 'flex heal']. Example: 'main tank,main heal'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>Tags saved</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/putMemberTags.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/teams/:idTeam/ticketspurchased/:ticketsPurchasedID",
    "title": "Unassign team ticket to user",
    "name": "UnassignTeamTickets",
    "group": "Teams",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[URL]  Team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticketsPurchasedID",
            "description": "<p>[URL]  Tickets purchased id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<p>Team ticket unassigned</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/ticketsPurchasedUnassign.py",
    "groupTitle": "Teams",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/lineups/:id",
    "title": "Delete a lineup",
    "name": "DeleteLineup",
    "group": "Teams_lineups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Lineup ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "none",
            "description": "<p>Lineup removed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/lineups/deleteLineup.py",
    "groupTitle": "Teams_lineups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/lineups/:id",
    "title": "Get a lineup",
    "name": "GetLineup",
    "group": "Teams_lineups",
    "description": "<p>To find all matches where this lineup is use, see GET /matchs?lineupID=</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]       Lineup ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team or lineup not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/lineups/getLineupByID.py",
    "groupTitle": "Teams_lineups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Lineup ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Lineup name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team.id",
            "description": "<p>Team ID</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "members",
            "description": "<p>Starting players: List of UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "substitutes",
            "description": "<p>Substitutes players: List of UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Lineup</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/lineups",
    "title": "Get lineups",
    "name": "GetLineups",
    "group": "Teams_lineups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamID",
            "description": "<p>[Query] Filter by team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "LineupObj[]",
            "optional": false,
            "field": "body",
            "description": "<p>Array of lineupObj</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team or lineup not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/lineups/getLineups.py",
    "groupTitle": "Teams_lineups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/teams/:teamID/lineups",
    "title": "Create a lineup",
    "name": "PostLineup",
    "group": "Teams_lineups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body]  Lineup name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usersID",
            "description": "<p>[Body]  Lineup usersID list (starting), separate by &quot;,&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "substitutesID",
            "description": "<p>[Body]  Lineup substitutesID list (substitute), separate by &quot;,&quot;. Value can be empty if no substitutes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Team not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Conflict (duplicate usersID, ...)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/lineups/postLineup.py",
    "groupTitle": "Teams_lineups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Lineup ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Lineup name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team.id",
            "description": "<p>Team ID</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "members",
            "description": "<p>Starting players: List of UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "substitutes",
            "description": "<p>Substitutes players: List of UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Lineup</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/lineups/:id",
    "title": "Update a lineup",
    "name": "PutLineup",
    "group": "Teams_lineups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  Lineup ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Lineup name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/teams/lineups/putLineup.py",
    "groupTitle": "Teams_lineups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Lineup ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Lineup name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team.id",
            "description": "<p>Team ID</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "members",
            "description": "<p>Starting players: List of UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "List[TeamMemberObj]",
            "optional": false,
            "field": "substitutes",
            "description": "<p>Substitutes players: List of UserObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the Lineup</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/matchs/:matchID/lineups",
    "title": "Assign a lineup to a match",
    "name": "assignLineup",
    "group": "Teams_lineups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matchID",
            "description": "<p>[URL] Match ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lineupID",
            "description": "<p>[BODY] Lineup ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Lineup assigned</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/matchs/assignLineup.py",
    "groupTitle": "Teams_lineups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:idChallenge/tickets/:idTicket",
    "title": "Buy a ticket",
    "name": "BuyTicket",
    "group": "Tickets",
    "description": "<p>Organization owner can force a team to buy a team ticket</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idTicket",
            "description": "<p>[URL] Ticket ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTeam",
            "description": "<p>[Body] Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "idUser",
            "description": "<p>[Body] [Only for organization admin] Specify recipient user id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticketType",
            "description": "<p>[Body] Ticket type: personal or team</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "paypalButton",
            "description": "<p>Paypal html button (base64 encoded) if ticket is not free</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ticketPurchasedID",
            "description": "<p>TicketPurchased ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ticket not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/buyTicket.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/challenges/:idChallenge/tickets/:idTicket",
    "title": "Delete a ticket",
    "name": "DeleteTicket",
    "group": "Tickets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idTicket",
            "description": "<p>[URL] Ticket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>Ticket deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge or Ticket not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/deleteTicket.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "ticketspurchased/:id",
    "title": "Delete purchased ticket",
    "name": "DeleteTicketsPurchased",
    "group": "Tickets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] PurchasedTicketID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>PurchasedTicket replaced</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Not valid Purchased ticketID</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/deletePurchasedTicket.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:idChallenge/tickets/:idTicket",
    "title": "Get a ticket",
    "name": "GetTicket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idTicket",
            "description": "<p>[URL] Ticket ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge or Ticket not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/getTicket.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "stepsID",
            "description": "<p>Array of Step ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>Timestamp: user cannot buy ticket before this date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamValidated",
            "description": "<p>Timestamp: after this date, validated team (have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamNotValidated",
            "description": "<p>Timestamp: after this date, not validated team (not have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "multiplePurchaseLimit",
            "description": "<p>How many time this ticket can be purchased by the same user (-1 = unlimited)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/challenges/:id/tickets",
    "title": "List tickets",
    "name": "GetTickets",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": true,
            "field": "active",
            "description": "<p>[Query] Return only challenges with tickets not expired (this variable must be added in url as ?foo=bar)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "Array",
            "description": "<p>Array of ticket objects. See ticket object in GET /challenges/:id/tickets/:id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>No tickets created in this challenge</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/getTickets.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/challenges/:id/tickets",
    "title": "Create a ticket",
    "name": "PostTicket",
    "group": "Tickets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Body] Ticket name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "stepsID",
            "description": "<p>[Body] Array of Step ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>[Body] Pricing (float)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>[Body] Timestamp: User cannot buy ticket before this date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamValidated",
            "description": "<p>[Body] Timestamp: after this date, validated team (have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamNotValidated",
            "description": "<p>[Body] Timestamp: after this date, not validated team (not have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "multiplePurchaseLimit",
            "description": "<p>[Body] How many time this ticket can be purchased by the same user (-1 = unlimited)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Challenge not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ticket name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/postTicket.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "stepsID",
            "description": "<p>Array of Step ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>Timestamp: user cannot buy ticket before this date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamValidated",
            "description": "<p>Timestamp: after this date, validated team (have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamNotValidated",
            "description": "<p>Timestamp: after this date, not validated team (not have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "multiplePurchaseLimit",
            "description": "<p>How many time this ticket can be purchased by the same user (-1 = unlimited)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/challenges/:idChallenge/tickets/:idTicket",
    "title": "Update a ticket",
    "name": "PutTicket",
    "group": "Tickets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idChallenge",
            "description": "<p>[URL] Challenge ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idTicket",
            "description": "<p>[URL] Ticket ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>[Body] Ticket name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "stepsID",
            "description": "<p>[Body] Array of Step ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>[Body] Pricing (float)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "startDate",
            "description": "<p>[Body] Timestamp: User cannot buy ticket before this date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "expirationDateTeamValidated",
            "description": "<p>[Body] Timestamp: after this date, validated team (have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "expirationDateTeamNotValidated",
            "description": "<p>[Body] Timestamp: after this date, not validated team (not have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "multiplePurchaseLimit",
            "description": "<p>[Body] How many time this ticket can be purchased by the same user (-1 = unlimited)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ticket not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ticket name already exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/putTicket.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "challengeID",
            "description": "<p>ID of the Challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "stepsID",
            "description": "<p>Array of Step ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startDate",
            "description": "<p>Timestamp: user cannot buy ticket before this date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamValidated",
            "description": "<p>Timestamp: after this date, validated team (have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expirationDateTeamNotValidated",
            "description": "<p>Timestamp: after this date, not validated team (not have enough members) can't buy this ticket (int)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "multiplePurchaseLimit",
            "description": "<p>How many time this ticket can be purchased by the same user (-1 = unlimited)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "ticketspurchased/<int:sourceTicketID>/replace",
    "title": "Replace purchased tickets",
    "name": "ReplaceTicketsPurchased",
    "group": "Tickets",
    "permission": [
      {
        "name": "organization owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sourceTicketID",
            "description": "<p>[URL] Source ticketID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "destTicketID",
            "description": "<p>[Body] Destination ticketID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Tickets replaced</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Source or destination ticket not found</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/challenges/tickets/replaceTicketsPurchased.py",
    "groupTitle": "Tickets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/:id/assets/profile",
    "title": "Delete a user profile image",
    "name": "DeleteUserAsset",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>User profile image deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/deleteUserAsset.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/:id/follow",
    "title": "Unfollow user",
    "name": "DeleteUserFollow",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/removeUserFollow.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/feed",
    "title": "Get a user feed",
    "name": "Feed",
    "group": "Users",
    "description": "<p>Return histories about me, my teams and followed objets. See GET /users/:id/histories for output. For not authenticated users, return basic feed with delay (cache)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Users unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>[Query] Result page (offset). First page: 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>[Query] Provide this value (find on body's page=0) when requesting page &gt;= 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/getUserFeed.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lines",
            "description": "<p>Total lines available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total pages available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>Provide this value as query parameter when requesting page &gt;= 1</p>"
          },
          {
            "group": "Success 200",
            "type": "HistoryObj[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of history object. Sometimes more objects than expected may be present.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>History ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>History type</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data.action",
            "description": "<p>Details as json format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.visibility",
            "description": "<p>Who can see this history</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.registerDate",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "userObj",
            "optional": true,
            "field": "data.user",
            "description": "<p>Present on user's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": true,
            "field": "data.team",
            "description": "<p>Present on team's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "matchObj(light)",
            "optional": true,
            "field": "data.match",
            "description": "<p>Present on match's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "ChallengeObj",
            "optional": true,
            "field": "data.challenge",
            "description": "<p>Challenge object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get a user",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Users unique ID, 'me' or username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User, username format: username#1234 or username-1234</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "publicEmail",
            "description": "<p>1 if public, 0 if private</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": true,
            "field": "emailValidated",
            "description": "<p>true if email is validated</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": true,
            "field": "emailAllowCommercialUsage",
            "description": "<p>1 if user has accepted to received commercial notifications</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "publicBattlenetBtag",
            "description": "<p>1 if public, 0 if private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nationality",
            "description": "<p>Nationality</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": true,
            "field": "marketplaceTransfer",
            "description": "<p>The user is open to transfer proposals</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": true,
            "field": "marketplaceLent",
            "description": "<p>The user is open to loan proposals</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Registration date of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj[]",
            "optional": true,
            "field": "teams",
            "description": "<p>List of team where user is present. Team roles are included</p>"
          },
          {
            "group": "Success 200",
            "type": "TeamObj[]",
            "optional": true,
            "field": "teamsLent",
            "description": "<p>List of team where user is lent. Team roles are included</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "organizationRoles",
            "description": "<p>List of current organization roles for admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "thirdparties",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "followers",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "followers.number",
            "description": "<p>Number of followers</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "followers.followed",
            "description": "<p>DEPRECATED. True if i follow this user. False if i don't follow this user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "subscriptions",
            "description": "<p>Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "subscriptions.number",
            "description": "<p>Number of subscriptions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email address of the User. Only if specified in 'fields' query parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "battlenetBtag",
            "description": "<p>Battlenet Battletag of the User. Only if specified in 'fields' query parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "thirdparties.discord",
            "description": "<p>Object. Null if no account linked. Only if specified in 'fields' query parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "thirdparties.discord.publicDiscordTag",
            "description": "<p>1 if public, 0 if private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "thirdparties.discord.discordTag",
            "description": "<p>Discord Tag (update may be delayed due to cache). Null if account is private</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "externalLinks",
            "description": "<p>ExternalLinks object. Only if specified in 'fields' query parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "castUrl",
            "description": "<p>Streaming link like a Twitch page.Only if specified in 'fields' query parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "previousTeams",
            "description": "<p>Teams left by this user. Only if specified in 'fields' query parameter</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "previousTeams.teams",
            "description": "<p>List</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "previousTeams.teams.joinDate",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "previousTeams.teams.leftDate",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "previousTeams.teams.team",
            "description": "<p>TeamObj</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "private",
            "description": "<p>Only on 'me'</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "private.follow",
            "description": "<p>Info about teams and users followed by my account</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "private.follow.teams",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private.follow.teams.id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private.follow.teams.name",
            "description": "<p>Team name</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "private.follow.teams.users",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/getUserByID.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id/histories",
    "title": "Get a user public histories",
    "name": "GetUserHistories",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Users unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>[Query] Result page (offset). First page: 0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>[Query] Provide this value (find on body's page=0) when requesting page &gt;= 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/getUserHistories.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lines",
            "description": "<p>Total lines available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total pages available (not only this page)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "baseID",
            "description": "<p>Provide this value as query parameter when requesting page &gt;= 1</p>"
          },
          {
            "group": "Success 200",
            "type": "HistoryObj[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of history object. Sometimes more objects than expected may be present.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>History ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>History type</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data.action",
            "description": "<p>Details as json format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.visibility",
            "description": "<p>Who can see this history</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.registerDate",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "userObj",
            "optional": true,
            "field": "data.user",
            "description": "<p>Present on user's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "teamObj",
            "optional": true,
            "field": "data.team",
            "description": "<p>Present on team's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "matchObj(light)",
            "optional": true,
            "field": "data.match",
            "description": "<p>Present on match's histories</p>"
          },
          {
            "group": "Success 200",
            "type": "ChallengeObj",
            "optional": true,
            "field": "data.challenge",
            "description": "<p>Challenge object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id/stats",
    "title": "Get a user stats",
    "name": "GetUserStats",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] Users unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "byTeams",
            "description": "<p>PointsObj. See */ranking pages for details</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sum",
            "description": "<p>Sum of PointsObj from 'byTeams'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/getUserStats.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id/teams/invitations",
    "title": "List invitations to join a team",
    "name": "ListTeamMemberInvitations",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]         Team ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userFields",
            "description": "<p>[Query]                 Additionals fields. (list of string, splited by a comma ','). Allowed values: ['email', 'battlenetBtag', 'thirdpartiesDiscord', 'externalLinks', 'castUrl', 'ticketsPurchased']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation ID (Array[InvitedMemberObject])</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "invitationType",
            "description": "<p>Invitation type. Allowed values: ['invitation', 'transfer', 'lent']</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "challengeID",
            "description": "<p>Scope of this invitation. Could be present for all transfer and lent. Not for team invitation.</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "teamAccepted",
            "description": "<p>0 if invitation is sent by the user / 1 by the team</p>"
          },
          {
            "group": "200",
            "type": "Bool",
            "optional": false,
            "field": "userAccepted",
            "description": "<p>0 if invitation is sent by the team / 1 by the user)</p>"
          },
          {
            "group": "200",
            "type": "TeamObj",
            "optional": false,
            "field": "team",
            "description": "<p>Destination team object</p>"
          },
          {
            "group": "200",
            "type": "TeamObj",
            "optional": true,
            "field": "teamSource",
            "description": "<p>Source team object</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": true,
            "field": "teamSource.additionalFields",
            "description": "<p>Additional fields</p>"
          },
          {
            "group": "200",
            "type": "MemberObj",
            "optional": true,
            "field": "teamSource.additionalFields.member",
            "description": "<p>MemberObj</p>"
          },
          {
            "group": "200",
            "type": "SegmentObj",
            "optional": true,
            "field": "teamSource.additionalFields.segment",
            "description": "<p>SegmentObj</p>"
          },
          {
            "group": "200",
            "type": "Userobj",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          },
          {
            "group": "200",
            "type": "SegmentObj",
            "optional": true,
            "field": "segment",
            "description": "<p>Destination team: segment object</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": true,
            "field": "lentExpirationDate",
            "description": "<p>Lent expiration (timestamp). After this date, user cannot play destTeam's matchs</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "registerDate",
            "description": "<p>Invitation date (timestamp)</p>"
          }
        ],
        "204": [
          {
            "group": "204",
            "type": "None",
            "optional": false,
            "field": "None",
            "description": "<p>No invitations</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/getUserTeamsInvitations.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/:id/follow",
    "title": "Follow user",
    "name": "PostUserFollow",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[URL]  User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User not found</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Only for DELETE: This object has sub-object(s) and can't be removed now. Remove sub-object(s) before retry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/postUserFollow.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update a user",
    "name": "PutUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>[Body] User email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "publicEmail",
            "description": "<p>[Body] 0 or 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "emailAllowCommercialUsage",
            "description": "<p>[Body] 0 or 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "publicBattlenetBtag",
            "description": "<p>[Body] 0 or 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "publicDiscordTag",
            "description": "<p>[Body] 0 or 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>[Body] User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>[Body] Phone number as international format https://en.wikipedia.org/wiki/E.164</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "castUrl",
            "description": "<p>[Body] User cast url (like twitch link)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>[Body] User profile image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nationality",
            "description": "<p>[Body] User nationality (2 characteres like 'en')</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceTransfer",
            "description": "<p>[Body] User is open to transfer proposals (O or 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "marketplaceLent",
            "description": "<p>[Body] User is open to loan proposals (O or 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "unlinkThirdpartiesBattlenet",
            "description": "<p>[Body] 0 or 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "unlinkThirdpartiesDiscord",
            "description": "<p>[Body] 0 or 1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Conflict (email already exist, ...)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/putUserByID.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:id/external-links",
    "title": "Update a user external links",
    "name": "PutUserExternalLinks",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>[URL] User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "discord",
            "description": "<p>[Body] User discord page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "facebook",
            "description": "<p>[Body] User facebook page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tiktok",
            "description": "<p>[Body] User tiktok page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "twitter",
            "description": "<p>[Body] User twitter page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "instagram",
            "description": "<p>[Body] User instagram page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "youtube",
            "description": "<p>[Body] User youtube page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "twitch",
            "description": "<p>[Body] User twitch page link (or empty string to remove)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>[Body] User website link (or empty string to remove)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "None",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Missing input parameter</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Missing authentication parameters</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Authentication refused / Forbidden</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Conflict</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/routes/users/putUserExternalLinks.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-ID",
            "description": "<p>Website client ID. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "X-App-Secret",
            "description": "<p>Website client Secret. Not required if executed from CDN</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User Bearer accesss token. Can be optional for some read only requests</p>"
          }
        ]
      }
    }
  }
] });
