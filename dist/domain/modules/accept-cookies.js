"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptCookies = void 0;
const acceptCookies = async (page) => {
    console.log('Accepte les cookies');
    const acceptCookiesSelector = '#ppms_cm_agree-to-all';
    await page.waitForSelector(acceptCookiesSelector);
    await page.click(acceptCookiesSelector);
};
exports.acceptCookies = acceptCookies;
