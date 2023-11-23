import { cache } from '../config/cache';
import { endDate, startDate } from '../config/fetch-interval';
import { SchoolEvent } from '../interfaces/entities/school-event.entity';
import { fetchPlanning } from './fetch-planning';

export const startBot = async () => {
	const currentPlanning = await fetchPlanning(startDate, endDate);
	if (!currentPlanning) {
		return console.log('Aucun planning récupéré');
	}
	cache.set('currentPlanning', currentPlanning);
	console.log(
		'Planning récupéré et enregistré dans le cache',
		(currentPlanning as SchoolEvent[]).length
	);
};
