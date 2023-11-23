"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPuppeteer = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const initPuppeteer = async (puppeteerConfig, viewPortConfig) => {
    const browser = await puppeteer_1.default.launch(puppeteerConfig);
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport(viewPortConfig);
    return page;
};
exports.initPuppeteer = initPuppeteer;
