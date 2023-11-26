"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppeteerConfig = void 0;
exports.puppeteerConfig = {
    // options de lancement de puppeteer
    launch: {
        timeout: 20000,
        ignoreHTTPSErrors: true,
        slowMo: 0,
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
        ],
        headless: 'new',
        dumpio: true, // permet de voir les console.log dans le terminal
    },
    // la taille de la fenêtre du navigateur
    viewport: {
        width: 1080,
        height: 1024,
    },
};
