export const acceptCookies = async (page: any) => {
	console.log('Accepte les cookies');
	const acceptCookiesSelector = '#ppms_cm_agree-to-all';
	await page.waitForSelector(acceptCookiesSelector);
	await page.click(acceptCookiesSelector);
};
