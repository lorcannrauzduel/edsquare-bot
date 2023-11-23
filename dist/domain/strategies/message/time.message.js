"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeMessageStrategy = void 0;
class TimeMessageStrategy {
    getMessage(change) {
        const startTimeFormatted = new Date(change.oldValue).toLocaleString();
        const endTimeFormatted = new Date(change.newValue).toLocaleString();
        return `L'heure du cours : **${change.oldItem.title}** a changé de ${startTimeFormatted} à **${endTimeFormatted}**`;
    }
}
exports.TimeMessageStrategy = TimeMessageStrategy;
