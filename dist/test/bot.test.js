"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const events_1 = require("./mock/events");
const get_changes_1 = require("../domain/modules/get-changes");
const strategies_1 = require("../domain/strategies");
describe('Update planning', () => {
    it('should check if propertis has changed', () => {
        const changes = (0, get_changes_1.getChanges)(events_1.oldData, events_1.newData);
        (0, chai_1.expect)(changes.list).to.be.an('array');
        (0, chai_1.expect)(changes.list).to.have.lengthOf(3); // 2 changements
    });
    it('should display teacher message', () => {
        const changes = (0, get_changes_1.getChanges)(events_1.oldData, events_1.newData);
        const change = changes.list[1];
        const strategy = (0, strategies_1.getStrategy)(change);
        const message = strategy.getMessage(change);
        const expectedMessage = `Le professeur de ${change.oldItem.title} a changé de ${change.oldValue} à ${change.newValue}`;
        (0, chai_1.expect)(message).to.equal(expectedMessage);
    });
    it('should display time message', () => {
        const changes = (0, get_changes_1.getChanges)([
            {
                start: events_1.oldData[0].start,
                end: events_1.oldData[0].end,
            },
        ], [
            {
                start: events_1.newData[0].start,
                end: events_1.newData[0].end,
            },
        ]);
        const change = changes.list[0];
        const strategy = (0, strategies_1.getStrategy)(change);
        const message = strategy.getMessage(change);
        const startTimeFormatted = new Date(change.oldValue).toLocaleString();
        const endTimeFormatted = new Date(change.newValue).toLocaleString();
        const expectedMessage = `L'heure du cours : **${change.oldItem.title}** a changé de ${startTimeFormatted} à **${endTimeFormatted}**`;
        (0, chai_1.expect)(message).to.equal(expectedMessage);
    });
    it('should display room message', () => {
        const changes = (0, get_changes_1.getChanges)([
            {
                room: events_1.oldData[0].room,
            },
        ], [
            {
                room: events_1.newData[0].room,
            },
        ]);
        const change = changes.list[0];
        const strategy = (0, strategies_1.getStrategy)(change);
        const message = strategy.getMessage(change);
        const expectedMessage = `La salle du cours : **${change.oldItem.title}** a changé de ${change.oldValue} à **${change.newValue}**`;
        (0, chai_1.expect)(message).to.equal(expectedMessage);
    });
});
