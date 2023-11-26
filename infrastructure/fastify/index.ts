import { fastify } from 'fastify';
import { startBot, monitorPlanning } from '../../domain';
import { config } from 'dotenv';
import { Builder, Browser, By, Key, until } from 'selenium-webdriver';

config();

const app = fastify();

app.get('/', async (request, reply) => {
	(async function example() {
		let driver = await new Builder().forBrowser('firefox').build();
		console.log('driver', driver);
		try {
			await driver.get('http://www.google.com');
			await driver
				.findElement(By.name('q'))
				.sendKeys('You did it!!', Key.RETURN);
			// await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);
		} catch (err) {
			console.error(err);
		} finally {
			await driver.quit();
		}
	})();
});

app.listen(
	{ port: (process.env.PORT as any) || 3000 },
	async (err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.log(`Server listening at ${address}`);
		// await startBot();
		// await monitorPlanning();
	}
);
