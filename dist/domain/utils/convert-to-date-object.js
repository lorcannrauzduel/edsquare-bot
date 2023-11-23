"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToDateObject = void 0;
const convertToDateObject = (dateString) => {
    const parts = dateString.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
};
exports.convertToDateObject = convertToDateObject;
