import puppeteer from 'puppeteer';
import { acceptCookies } from './accept-cookies';
import { connectToEdsquare } from './connect-to-edsquare';
import { getEvents } from './get-events';
import { SchoolEvent } from '../interfaces/entities/school-event.entity';
import { initPuppeteer } from './init-puppeteer';
import { puppeteerConfig } from '../config/puppeteer';

export const fetchPlanning = async (
	startDate: string,
	endDate: string
): Promise<SchoolEvent[] | unknown> => {
	if (!process.env.EDSQUARE_EMAIL || !process.env.EDSQUARE_PASSWORD) {
		throw new Error('Missing EDSQUARE_EMAIL or EDSQUARE_PASSWORD env variable');
	}

	try {
		const page = await initPuppeteer(
			puppeteerConfig.launch,
			puppeteerConfig.viewport
		);
		await page.goto('https://app.edsquare.fr/');
		await acceptCookies(page);
		await connectToEdsquare(
			process.env.EDSQUARE_EMAIL,
			process.env.EDSQUARE_PASSWORD,
			page
		);
		const events = await getEvents(startDate, endDate, page);
		return events;
	} catch (error: unknown) {
		console.log({ error });
		return error;
	}
};
