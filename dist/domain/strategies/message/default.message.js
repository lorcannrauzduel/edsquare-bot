"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStrategy = void 0;
class DefaultStrategy {
    getMessage(change) {
        return `La propriété ${change.key} a changé de ${change.oldValue} à ${change.newValue}`;
    }
}
exports.DefaultStrategy = DefaultStrategy;
