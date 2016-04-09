"use strict";
var pgp = require('pg-promise');
var config_1 = require('../config');
var db = pgp()(config_1.default.database);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = db;
//# sourceMappingURL=index.js.map