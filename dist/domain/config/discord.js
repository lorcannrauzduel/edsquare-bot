"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordWebhook = void 0;
const discord_webhook_node_1 = require("discord-webhook-node");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
if (!process.env.WEBHOOK_URL) {
    throw new Error('WEBHOOK_URL is not defined in .env file');
}
exports.discordWebhook = new discord_webhook_node_1.Webhook(process.env.WEBHOOK_URL);
