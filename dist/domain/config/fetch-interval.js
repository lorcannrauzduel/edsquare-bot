"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPeriod = exports.checkPeriodInMin = exports.endDate = exports.startDate = void 0;
const calculate_date_range_1 = require("../utils/calculate-date-range");
_a = (0, calculate_date_range_1.calculateDateRange)(), exports.startDate = _a.startDate, exports.endDate = _a.endDate;
exports.checkPeriodInMin = 1;
exports.checkPeriod = exports.checkPeriodInMin * 60 * 1000;
