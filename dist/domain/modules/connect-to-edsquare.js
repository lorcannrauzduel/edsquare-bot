"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToEdsquare = void 0;
const connectToEdsquare = async (email, password, page) => {
    console.log('Va sur la page de connexion');
    await page.type('#user_email', email);
    await page.type('#user_password', password);
    console.log('Entre les identifiants');
    const loginSelector = '#kt_login_signin_submit';
    await page.waitForSelector(loginSelector);
    await page.click(loginSelector);
    console.log('Se connecte en tant que', email);
};
exports.connectToEdsquare = connectToEdsquare;
