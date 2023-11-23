export const convertToDateObject = (dateString: any) => {
	const parts = dateString.split('/');
	return new Date(parts[2], parts[1] - 1, parts[0]);
};
