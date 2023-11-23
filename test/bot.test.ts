import { expect } from 'chai';
import { newData, oldData } from './mock/events';
import { getChanges } from '../domain/modules/get-changes';
import { getStrategy } from '../domain/strategies';
import { endDate, startDate } from '../domain/config/fetch-interval';

describe('Update planning', () => {
	it('should check if propertis has changed', () => {
		const changes = getChanges(oldData, newData);
		expect(changes.list).to.be.an('array');
		expect(changes.list).to.have.lengthOf(3); // 2 changements
	});

	it('should display teacher message', () => {
		const changes = getChanges(oldData, newData);

		const change = changes.list[1];
		const strategy = getStrategy(change);
		const message = strategy.getMessage(change);
		const expectedMessage = `Le professeur de ${change.oldItem.title} a changé de ${change.oldValue} à ${change.newValue}`;
		expect(message).to.equal(expectedMessage);
	});

	it('should display time message', () => {
		const changes = getChanges(
			[
				{
					start: oldData[0].start,
					end: oldData[0].end,
				},
			],
			[
				{
					start: newData[0].start,
					end: newData[0].end,
				},
			]
		);

		const change = changes.list[0];
		const strategy = getStrategy(change);
		const message = strategy.getMessage(change);
		const startTimeFormatted = new Date(change.oldValue).toLocaleString();
		const endTimeFormatted = new Date(change.newValue).toLocaleString();
		const expectedMessage = `L'heure du cours : **${change.oldItem.title}** a changé de ${startTimeFormatted} à **${endTimeFormatted}**`;
		expect(message).to.equal(expectedMessage);
	});

	it('should display room message', () => {
		const changes = getChanges(
			[
				{
					room: oldData[0].room,
				},
			],
			[
				{
					room: newData[0].room,
				},
			]
		);
		const change = changes.list[0];

		const strategy = getStrategy(change);
		const message = strategy.getMessage(change);
		const expectedMessage = `La salle du cours : **${change.oldItem.title}** a changé de ${change.oldValue} à **${change.newValue}**`;
		expect(message).to.equal(expectedMessage);
	});
});
