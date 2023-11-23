"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppeteerConfig = void 0;
exports.puppeteerConfig = {
    // options de lancement de puppeteer
    launch: {
        headless: 'new',
        dumpio: true, // permet de voir les console.log dans le terminal
    },
    // la taille de la fenêtre du navigateur
    viewport: {
        width: 1080,
        height: 1024,
    },
};
