"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorPlanning = void 0;
const cache_1 = require("../config/cache");
const discord_1 = require("../config/discord");
const fetch_interval_1 = require("../config/fetch-interval");
const strategies_1 = require("../strategies");
const fetch_planning_1 = require("./fetch-planning");
const get_changes_1 = require("./get-changes");
const monitorPlanning = async () => {
    setInterval(async () => {
        console.log('Vérifie le planning...');
        const newPlanning = (await (0, fetch_planning_1.fetchPlanning)(fetch_interval_1.startDate, fetch_interval_1.endDate));
        const oldPlanning = cache_1.cache.get('currentPlanning');
        const changes = (0, get_changes_1.getChanges)(oldPlanning, newPlanning);
        if (changes.hasChanges) {
            cache_1.cache.set('currentPlanning', newPlanning);
            console.log('Nouveaux changements dans le planning', changes.list.length);
            for (const change of changes.list) {
                const strategy = (0, strategies_1.getStrategy)(change);
                const message = strategy.getMessage(change);
                const promoName = change.newItem.target;
                return discord_1.discordWebhook.send(`[${promoName}] ${message}`);
            }
        }
        return console.log('Aucun changement détecté dans le planning');
    }, fetch_interval_1.checkPeriod);
};
exports.monitorPlanning = monitorPlanning;
