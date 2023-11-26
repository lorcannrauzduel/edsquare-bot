import puppeteer, { Viewport } from 'puppeteer';

export const initPuppeteer = async (
	puppeteerConfig: any,
	viewPortConfig: Viewport
) => {
	const browser = await puppeteer.launch(puppeteerConfig);
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.setViewport(viewPortConfig);
	return page;
};
