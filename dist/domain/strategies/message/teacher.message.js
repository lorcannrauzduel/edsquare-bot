"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherMessageStrategy = void 0;
class TeacherMessageStrategy {
    getMessage(change) {
        return `Le professeur de ${change.oldItem.title} a changé de ${change.oldValue} à ${change.newValue}`;
    }
}
exports.TeacherMessageStrategy = TeacherMessageStrategy;
