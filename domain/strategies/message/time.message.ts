import { MessageStrategy } from '../../interfaces/strategies/message.strategy';

export class TimeMessageStrategy implements MessageStrategy {
	getMessage(change: any) {
		const startTimeFormatted = new Date(change.oldValue).toLocaleString();
		const endTimeFormatted = new Date(change.newValue).toLocaleString();
		return `L'heure du cours : **${change.oldItem.title}** a changé de ${startTimeFormatted} à **${endTimeFormatted}**`;
	}
}
