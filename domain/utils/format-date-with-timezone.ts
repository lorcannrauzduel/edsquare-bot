import { convertToDateObject } from './convert-to-date-object';

export const formatDateWithTimezone = (dateString: string) => {
	const date = convertToDateObject(dateString);
	const year = date.getFullYear();
	const month = `0${date.getMonth() + 1}`.slice(-2);
	const day = `0${date.getDate()}`.slice(-2);
	return `${year}-${month}-${day}T00:00:00+01:00`;
};
