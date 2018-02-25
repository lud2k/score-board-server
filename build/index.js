(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["score-board-server"] = factory();
	else
		root["score-board-server"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ApiError {
    constructor(data) {
        this.data = data;
    }
}
exports.ApiError = ApiError;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleSheets = __webpack_require__(11);
exports.initialize = (config) => __awaiter(this, void 0, void 0, function* () {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.initialize(config);
    }
    throw new Error(`Unknow database type: ${type}`);
});
exports.addScore = (config, score) => __awaiter(this, void 0, void 0, function* () {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.addScore(config, score);
    }
    throw new Error(`Unknow database type: ${type}`);
});
exports.getScores = (config) => __awaiter(this, void 0, void 0, function* () {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.getScores(config);
    }
    throw new Error(`Unknow database type: ${type}`);
});
exports.getPlayers = (config) => __awaiter(this, void 0, void 0, function* () {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.getPlayers(config);
    }
    throw new Error(`Unknow database type: ${type}`);
});
exports.getGames = (config) => __awaiter(this, void 0, void 0, function* () {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.getGames(config);
    }
    throw new Error(`Unknow database type: ${type}`);
});
exports.addPlayer = (config, player) => __awaiter(this, void 0, void 0, function* () {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.addPlayer(config, player);
    }
    throw new Error(`Unknow database type: ${type}`);
});
exports.getDataUrl = (config) => {
    const type = config.database.type;
    if (type === 'google-sheets') {
        return GoogleSheets.getDataUrl(config);
    }
    throw new Error(`Unknow database type: ${type}`);
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isNpmRunDev = () => {
    return process.env['npm_lifecycle_script'] === 'webpack-watch-server';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(6);
const bodyParser = __webpack_require__(7);
const config_1 = __webpack_require__(8);
const routes_1 = __webpack_require__(9);
const env_1 = __webpack_require__(4);
const Database = __webpack_require__(2);
exports.startServer = (config) => {
    // load config file if needed
    if (!config) {
        config = config_1.loadConfig();
    }
    console.info('Loaded config', JSON.stringify(config));
    Database.initialize(config)
        .then(() => {
        const port = config.port || 3030;
        const app = express();
        app.use(bodyParser.json());
        routes_1.setupRoutes(app, config);
        app.listen(port, () => console.info(`Server started: http://localhost:${port}`));
    })
        .catch((e) => {
        console.error('Failed to initialize backend', e);
    });
};
// start server if this is "npm run dev"
if (env_1.isNpmRunDev()) {
    exports.startServer();
}
exports.default = exports.startServer;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(0);
exports.validateConfig = (config) => {
    if (!config.database) {
        throw new Error('Missing database configuration');
    }
    if (!config.database.type) {
        throw new Error('Missing database type');
    }
    if (config.database.type === 'google-sheets') {
        if (!config.database.spreadsheetId) {
            throw new Error('Missing database spreadsheetId');
        }
    }
};
exports.loadConfig = () => {
    let config = null;
    try {
        config = JSON.parse(fs.readFileSync('config.json').toString());
    }
    catch (e) {
        throw new Error('Failed to load config.json file: ' + e);
    }
    exports.validateConfig(config);
    return config;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __webpack_require__(10);
const database_1 = __webpack_require__(2);
const error_1 = __webpack_require__(1);
const score_board_ui_1 = __webpack_require__(15);
const validation_1 = __webpack_require__(16);
const env_1 = __webpack_require__(4);
exports.safeRoute = (req, res, fn) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield fn();
    }
    catch (e) {
        if (e instanceof error_1.ApiError) {
            res.status(400).send(e.data);
        }
        else {
            console.error('Failed to execute request', e);
            res.sendStatus(500);
        }
    }
});
exports.setupRoutes = (app, config) => {
    const SCORE_BOARD_UI_JAVASCRIPT = score_board_ui_1.getScoreBoardUiScript(config);
    app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => {
            res.send(template_1.HTML);
        });
    }));
    app.get('/index.js', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => {
            if (env_1.isNpmRunDev()) {
                // reload the file every time
                res.send(score_board_ui_1.getScoreBoardUiScript(config));
            }
            else {
                // use cached file
                res.send(SCORE_BOARD_UI_JAVASCRIPT);
            }
        });
    }));
    app.get('/config.json', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => {
            res.send({
                backend: {
                    type: 'rest-api',
                    url: config.baseUrl || `${req.protocol}://${req.headers.host}`,
                    dataUrl: database_1.getDataUrl(config),
                },
            });
        });
    }));
    app.get('/data', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => __awaiter(this, void 0, void 0, function* () {
            const scores = yield database_1.getScores(config);
            const players = yield database_1.getPlayers(config);
            const games = yield database_1.getGames(config);
            res.send({ scores, players, games });
        }));
    }));
    app.get('/scores', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => __awaiter(this, void 0, void 0, function* () {
            res.send(yield database_1.getScores(config));
        }));
    }));
    app.post('/scores', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => __awaiter(this, void 0, void 0, function* () {
            // validate player
            const body = req.body;
            validation_1.validateAddScoreBody(body);
            res.send(yield database_1.addScore(config, body));
        }));
    }));
    app.get('/players', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => __awaiter(this, void 0, void 0, function* () {
            res.send(yield database_1.getPlayers(config));
        }));
    }));
    app.post('/players', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield exports.safeRoute(req, res, () => __awaiter(this, void 0, void 0, function* () {
            // validate player
            const body = req.body;
            validation_1.validateAddPlayerBody(body);
            res.send(yield database_1.addPlayer(config, body));
        }));
    }));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Score Board</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"></script>
    </head>
    <body>
      <script src="index.js"></script>
    </body>
  </html>
`;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(0);
const google_auth_library_1 = __webpack_require__(12);
const q = __webpack_require__(13);
const _ = __webpack_require__(3);
const error_1 = __webpack_require__(1);
const google = __webpack_require__(14);
let SECRETS = null;
exports.initialize = (config) => __awaiter(this, void 0, void 0, function* () {
    // load credentials
    const path = config.database.secretsPath || 'secrets.json';
    const json = fs.readFileSync(path).toString();
    SECRETS = JSON.parse(json);
});
exports.getScores = (config) => __awaiter(this, void 0, void 0, function* () {
    const client = yield getGAPIClient();
    const sheets = google.sheets('v4');
    const response = yield q.nfcall(sheets.spreadsheets.values.get, {
        auth: client,
        spreadsheetId: config.database.spreadsheetId,
        range: `Scores!A1:F100000`,
    });
    const players = _.keyBy(yield exports.getPlayers(config), 'name');
    const games = _.keyBy(yield exports.getGames(config), 'name');
    return response.data.values.slice(1).map((row, i) => {
        try {
            return {
                id: i.toString(),
                date: row[0],
                gameId: games[row[1]].id,
                playerId1: players[row[2]].id,
                playerId2: players[row[3]].id,
                score1: parseInt(row[4], 10),
                score2: parseInt(row[5], 10),
            };
        }
        catch (e) {
            console.warn(`There is an issue with score row ${i}: ${e}`);
        }
    });
});
exports.addScore = (config, score) => __awaiter(this, void 0, void 0, function* () {
    const client = yield getGAPIClient();
    const sheets = google.sheets('v4');
    const games = yield exports.getGames(config);
    const game = _.find(games, { id: score.gameId });
    if (!game) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'gameId', message: 'Invalid gameId' });
    }
    const players = yield exports.getPlayers(config);
    const player1 = _.find(players, { id: score.playerId1 });
    if (!player1) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'playerId1', message: 'Invalid playerId1' });
    }
    const player2 = _.find(players, { id: score.playerId2 });
    if (!player2) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'playerId2', message: 'Invalid playerId2' });
    }
    const response = yield q.nfcall(sheets.spreadsheets.values.append, {
        auth: client,
        spreadsheetId: config.database.spreadsheetId,
        range: `Scores!A1:F100000`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [
                [score.date, game.name, player1.name, player2.name, score.score1, score.score2],
            ],
        },
    });
    return {
        id: /!A(\d+):/.exec(response.data.updates.updatedRange)[1],
        date: score.date,
        gameId: score.gameId,
        playerId1: score.playerId1,
        playerId2: score.playerId2,
        score1: score.score1,
        score2: score.score2,
    };
});
exports.addPlayer = (config, player) => __awaiter(this, void 0, void 0, function* () {
    const client = yield getGAPIClient();
    const sheets = google.sheets('v4');
    // make sure this player doesn't already exist
    const players = yield exports.getPlayers(config);
    const existingPlayer = _.find(players, { name: player.name });
    if (existingPlayer) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'name', message: 'Player already exists' });
    }
    // add new player
    const response = yield q.nfcall(sheets.spreadsheets.values.append, {
        auth: client,
        spreadsheetId: config.database.spreadsheetId,
        range: `Players!A1:F100000`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [
                [player.name],
            ],
        },
    });
    return {
        id: /!A(\d+)/.exec(response.data.updates.updatedRange)[1],
        name: player.name,
    };
});
exports.getPlayers = (config) => __awaiter(this, void 0, void 0, function* () {
    const client = yield getGAPIClient();
    const sheets = google.sheets('v4');
    const response = yield q.nfcall(sheets.spreadsheets.values.get, {
        auth: client,
        spreadsheetId: config.database.spreadsheetId,
        range: `Players!A1:F100000`,
    });
    return response.data.values.slice(1).map((row, i) => ({
        id: i.toString(),
        name: row[0],
    }));
});
exports.getGames = (config) => __awaiter(this, void 0, void 0, function* () {
    const client = yield getGAPIClient();
    const sheets = google.sheets('v4');
    const response = yield q.nfcall(sheets.spreadsheets.values.get, {
        auth: client,
        spreadsheetId: config.database.spreadsheetId,
        range: `Games!A1:F100000`,
    });
    return response.data.values.slice(1).map((row, i) => ({
        id: i.toString(),
        name: row[0],
    }));
});
const getGAPIClient = () => __awaiter(this, void 0, void 0, function* () {
    const client = google_auth_library_1.auth.fromJSON(SECRETS);
    client.scopes = ['https://www.googleapis.com/auth/spreadsheets'];
    yield client.authorize();
    return client;
});
exports.getDataUrl = (config) => {
    return `https://docs.google.com/spreadsheets/u/1/d/${config.database.spreadsheetId}/edit`;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("google-auth-library");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("q");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("googleapis");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(0);
const SCRIPT_PATHS = ['./node_modules/score-board-ui/public/index.js',
    './node_modules/score-board-server/node_modules/score-board-ui/public/index.js'];
exports.getScoreBoardUiScript = (config) => {
    if (config.scoreBoardUiScriptPath) {
        return fs.readFileSync(config.scoreBoardUiScriptPath).toString();
    }
    else {
        for (let i = 0; i < SCRIPT_PATHS.length; i++) {
            const path = SCRIPT_PATHS[i];
            if (fs.existsSync(path)) {
                return fs.readFileSync(path).toString();
            }
        }
        throw new Error('Could not find score-board-ui/public/index.js');
    }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __webpack_require__(1);
const _ = __webpack_require__(3);
exports.validateAddScoreBody = (body) => {
    if (!body) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'body', message: 'Missing body' });
    }
    if (!body.playerId1 || !_.isString(body.playerId1)) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'playerId1', message: 'Invalid string' });
    }
    if (!body.playerId2 || !_.isString(body.playerId2)) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'playerId2', message: 'Invalid string' });
    }
    if (body.playerId1 === body.playerId2) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'playerId',
            message: 'Cannot be the same user' });
    }
    if (!body.gameId || !_.isString(body.gameId)) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'gameId', message: 'Invalid string' });
    }
    if (!_.isInteger(body.score1)) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'score1', message: 'Invalid integer' });
    }
    if (!_.isInteger(body.score2)) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'score2', message: 'Invalid integer' });
    }
};
exports.validateAddPlayerBody = (body) => {
    if (!body) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'body', message: 'Missing body' });
    }
    if (!body.name || !body.name.trim()) {
        throw new error_1.ApiError({ code: 'VALIDATION', field: 'name', message: 'Missing name' });
    }
};


/***/ })
/******/ ]);
});