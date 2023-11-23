import { SchoolEvent } from '../interfaces/entities/school-event.entity';
import { formatDateWithTimezone } from '../utils/format-date-with-timezone';

export const getEvents = async (
	startDate: string,
	endDate: string,
	page: any
): Promise<SchoolEvent[]> => {
	console.log(`Récupère les événements du ${startDate} au ${endDate}`);
	const formattedStartDate = formatDateWithTimezone(startDate);
	const formattedEndDate = formatDateWithTimezone(endDate);
	const planningURL = `https://app.edsquare.fr/admin/apps/plannings/json?start=${formattedStartDate}&end=${formattedEndDate}`;
	const planningSelector = 'a[href="/admin/apps/plannings"]';
	await page.waitForSelector(planningSelector);
	await page.goto(planningURL);
	await page.content();
	const events = await page.evaluate(async () => {
		return JSON.parse((document as any).querySelector('body').innerText);
	});
	return events;
};
