import { calculateDateRange } from '../utils/calculate-date-range';

export const { startDate, endDate } = calculateDateRange();

export const checkPeriodInMin = 1;
export const checkPeriod = checkPeriodInMin * 60 * 1000;
