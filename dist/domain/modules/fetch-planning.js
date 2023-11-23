"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPlanning = void 0;
const accept_cookies_1 = require("./accept-cookies");
const connect_to_edsquare_1 = require("./connect-to-edsquare");
const get_events_1 = require("./get-events");
const init_puppeteer_1 = require("./init-puppeteer");
const puppeteer_1 = require("../config/puppeteer");
const fetchPlanning = async (startDate, endDate) => {
    if (!process.env.EDSQUARE_EMAIL || !process.env.EDSQUARE_PASSWORD) {
        throw new Error('Missing EDSQUARE_EMAIL or EDSQUARE_PASSWORD env variable');
    }
    try {
        const page = await (0, init_puppeteer_1.initPuppeteer)(puppeteer_1.puppeteerConfig.launch, puppeteer_1.puppeteerConfig.viewport);
        await page.goto('https://app.edsquare.fr/');
        await (0, accept_cookies_1.acceptCookies)(page);
        await (0, connect_to_edsquare_1.connectToEdsquare)(process.env.EDSQUARE_EMAIL, process.env.EDSQUARE_PASSWORD, page);
        const events = await (0, get_events_1.getEvents)(startDate, endDate, page);
        return events;
    }
    catch (error) {
        console.log({ error });
        return error;
    }
};
exports.fetchPlanning = fetchPlanning;
