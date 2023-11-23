export const puppeteerConfig = {
	// options de lancement de puppeteer
	launch: {
		headless: true, // false pour voir l'action dans le navigateur
		dumpio: true, // permet de voir les console.log dans le terminal
	},
	// la taille de la fenêtre du navigateur
	viewport: {
		width: 1080,
		height: 1024,
	},
};
