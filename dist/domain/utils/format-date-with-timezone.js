"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateWithTimezone = void 0;
const convert_to_date_object_1 = require("./convert-to-date-object");
const formatDateWithTimezone = (dateString) => {
    const date = (0, convert_to_date_object_1.convertToDateObject)(dateString);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}T00:00:00+01:00`;
};
exports.formatDateWithTimezone = formatDateWithTimezone;
