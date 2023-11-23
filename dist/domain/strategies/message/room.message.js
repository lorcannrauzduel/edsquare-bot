"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomMessageStrategy = void 0;
class RoomMessageStrategy {
    getMessage(change) {
        return `La salle du cours : **${change.oldItem.title}** a changé de ${change.oldValue} à **${change.newValue}**`;
    }
}
exports.RoomMessageStrategy = RoomMessageStrategy;
