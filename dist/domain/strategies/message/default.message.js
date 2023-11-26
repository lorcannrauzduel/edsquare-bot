"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMessageStrategy = void 0;
class DefaultMessageStrategy {
    getMessage(change) {
        return `La propriété ${change.key} a changé de ${change.oldValue} à ${change.newValue}`;
    }
}
exports.DefaultMessageStrategy = DefaultMessageStrategy;
