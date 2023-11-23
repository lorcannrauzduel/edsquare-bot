import { Webhook } from 'discord-webhook-node';
import { config } from 'dotenv';
config();

if (!process.env.WEBHOOK_URL) {
	throw new Error('WEBHOOK_URL is not defined in .env file');
}

export const discordWebhook = new Webhook(process.env.WEBHOOK_URL as string);
