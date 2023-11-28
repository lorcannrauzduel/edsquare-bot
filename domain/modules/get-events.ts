import { config } from 'dotenv';
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
	const planningURL = `https://app.edsquare.fr/${process.env.EDSQUARE_PLANNING_BASE_URI}/json?start=${formattedStartDate}&end=${formattedEndDate}`;
	const planningSelector = `a[href="/${process.env.EDSQUARE_PLANNING_BASE_URI}"]`;
	await page.waitForSelector(planningSelector);
	await page.goto(planningURL);
	await page.content();
	const events = await page.evaluate(async () => {
		return JSON.parse((document as any).querySelector('body').innerText);
	});
	return events;
};
