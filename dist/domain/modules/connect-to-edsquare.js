"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToEdsquare = void 0;
const connectToEdsquare = async (email, password, page) => {
    console.log('Va sur la page de connexion');
    console.log('Entre les identifiants');
    await page.type('#user_email', email);
    await page.type('#user_password', password);
    const loginSelector = '#kt_login_signin_submit';
    await page.waitForSelector(loginSelector);
    await page.click(loginSelector);
    console.log(`Tentative de connexion avec ${email}`);
    const errorSelector = '.alert-custom';
    try {
        await page.waitForSelector(errorSelector, { timeout: 5000 });
        const errorMessage = await page.evaluate((errorSelector) => document.querySelector(errorSelector)?.textContent, errorSelector);
        if (errorMessage) {
            console.log('Erreur lors de la connexion', { errorMessage });
            process.exit(1);
        }
    }
    catch (error) {
        console.log('Connecté !');
        return true;
    }
};
exports.connectToEdsquare = connectToEdsquare;
