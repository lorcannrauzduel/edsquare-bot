export const connectToEdsquare = async (
	email: string,
	password: string,
	page: any
) => {
	console.log('Va sur la page de connexion');
	console.log('Entre les identifiants');
	await page.type('#user_email', email as string);
	await page.type('#user_password', password as string);
	const loginSelector = '#kt_login_signin_submit';
	await page.waitForSelector(loginSelector);
	await page.click(loginSelector);
	console.log(`Tentative de connexion avec ${email}`);
	const errorSelector = '.alert-custom';
	try {
		await page.waitForSelector(errorSelector, { timeout: 5000 });
		const errorMessage = await page.evaluate(
			(errorSelector: string) =>
				document.querySelector(errorSelector)?.textContent,
			errorSelector
		);
		if (errorMessage) {
			console.log('Erreur lors de la connexion', { errorMessage });
			process.exit(1);
		}
	} catch (error) {
		console.log('Connecté !');
		return true;
	}
};
