import { MessageStrategy } from '../../interfaces/strategies/message.strategy';

export class RoomMessageStrategy implements MessageStrategy {
	getMessage(change: any) {
		return `La salle du cours : **${change.oldItem.title}** a changé de ${change.oldValue} à **${change.newValue}**`;
	}
}
