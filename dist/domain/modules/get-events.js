"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = void 0;
const format_date_with_timezone_1 = require("../utils/format-date-with-timezone");
const getEvents = async (startDate, endDate, page) => {
    console.log(`Récupère les événements du ${startDate} au ${endDate}`);
    const formattedStartDate = (0, format_date_with_timezone_1.formatDateWithTimezone)(startDate);
    const formattedEndDate = (0, format_date_with_timezone_1.formatDateWithTimezone)(endDate);
    const planningURL = `https://app.edsquare.fr/admin/apps/plannings/json?start=${formattedStartDate}&end=${formattedEndDate}`;
    const planningSelector = 'a[href="/admin/apps/plannings"]';
    await page.waitForSelector(planningSelector);
    await page.goto(planningURL);
    await page.content();
    const events = await page.evaluate(async () => {
        return JSON.parse(document.querySelector('body').innerText);
    });
    return events;
};
exports.getEvents = getEvents;
