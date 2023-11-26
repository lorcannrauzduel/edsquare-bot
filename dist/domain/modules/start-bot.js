"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startBot = void 0;
const cache_1 = require("../config/cache");
// import { discordWebhook } from '../config/discord';
const fetch_interval_1 = require("../config/fetch-interval");
const fetch_planning_1 = require("./fetch-planning");
const startBot = async () => {
    // discordWebhook.send('Démarrage du bot');
    const currentPlanning = await (0, fetch_planning_1.fetchPlanning)(fetch_interval_1.startDate, fetch_interval_1.endDate);
    if (!currentPlanning) {
        return console.log('Aucun planning récupéré');
    }
    cache_1.cache.set('currentPlanning', currentPlanning);
    console.log('Planning récupéré et enregistré dans le cache', currentPlanning.length);
};
exports.startBot = startBot;
