"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const dotenv_1 = require("dotenv");
const selenium_webdriver_1 = require("selenium-webdriver");
(0, dotenv_1.config)();
const app = (0, fastify_1.fastify)();
app.get('/', async (request, reply) => {
    (async function example() {
        let driver = await new selenium_webdriver_1.Builder().forBrowser('firefox').build();
        console.log('driver', driver);
        try {
            await driver.get('http://www.google.com');
            await driver
                .findElement(selenium_webdriver_1.By.name('q'))
                .sendKeys('You did it!!', selenium_webdriver_1.Key.RETURN);
            // await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            await driver.quit();
        }
    })();
});
app.listen({ port: process.env.PORT || 3000 }, async (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
    // await startBot();
    // await monitorPlanning();
});
