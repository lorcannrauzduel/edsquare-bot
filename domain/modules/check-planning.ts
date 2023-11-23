import { cache } from '../config/cache';
import { discordWebhook } from '../config/discord';
import { checkPeriod, endDate, startDate } from '../config/fetch-interval';
import { SchoolEvent } from '../interfaces/entities/school-event.entity';
import { getStrategy } from '../strategies';
import { fetchPlanning } from './fetch-planning';
import { getChanges } from './get-changes';

export const checkPlanning = async () => {
	setInterval(async () => {
		console.log('Vérifie le planning...');
		const newPlanning = (await fetchPlanning(
			startDate,
			endDate
		)) as SchoolEvent[];
		const oldPlanning = cache.get('currentPlanning') as SchoolEvent[];
		const changes = getChanges(oldPlanning, newPlanning);
		if (changes.hasChanges) {
			cache.set('currentPlanning', newPlanning);
			console.log('Nouveaux changements dans le planning', changes.list.length);
			for (const change of changes.list) {
				const strategy = getStrategy(change);
				const message = strategy.getMessage(change);
				const promoName = change.newItem.target;
				return discordWebhook.send(`[${promoName}] ${message}`);
			}
		}
		return console.log('Aucun changement détecté dans le planning');
	}, checkPeriod);
};
