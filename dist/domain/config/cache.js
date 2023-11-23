"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const fetch_interval_1 = require("./fetch-interval");
// stdTTL permet de définir le temps de vie d'une entrée dans le cache
// checkperiod permet de définir le temps entre chaque vérification de la validité des entrées
exports.cache = new node_cache_1.default({
    stdTTL: Infinity,
    checkperiod: fetch_interval_1.checkPeriod,
});
