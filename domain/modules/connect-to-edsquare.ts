export const connectToEdsquare = async (
	email: string,
	password: string,
	page: any
) => {
	console.log('Va sur la page de connexion');
	await page.type('#user_email', email as string);
	await page.type('#user_password', password as string);
	console.log('Entre les identifiants');
	const loginSelector = '#kt_login_signin_submit';
	await page.waitForSelector(loginSelector);
	await page.click(loginSelector);
	console.log('Se connecte en tant que', email);
};
