"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDateRange = void 0;
const format_date_1 = require("./format-date");
const calculateDateRange = () => {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();
    const daysSinceMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    const daysUntilSunday = currentDayOfWeek === 0 ? 0 : 7 - currentDayOfWeek;
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - daysSinceMonday);
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + daysUntilSunday);
    const startDateString = (0, format_date_1.formatDate)(startDate);
    const endDateString = (0, format_date_1.formatDate)(endDate);
    return { startDate: startDateString, endDate: endDateString };
};
exports.calculateDateRange = calculateDateRange;
