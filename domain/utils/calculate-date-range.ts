import { formatDate } from './format-date';

export const calculateDateRange = () => {
	const currentDate = new Date();
	const currentDayOfWeek = currentDate.getDay();
	const daysSinceMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
	const daysUntilSunday = currentDayOfWeek === 0 ? 0 : 7 - currentDayOfWeek;
	const startDate = new Date(currentDate);
	startDate.setDate(currentDate.getDate() - daysSinceMonday);
	const endDate = new Date(currentDate);
	endDate.setDate(currentDate.getDate() + daysUntilSunday);
	const startDateString = formatDate(startDate);
	const endDateString = formatDate(endDate);
	return { startDate: startDateString, endDate: endDateString };
};
