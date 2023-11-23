import { MessageStrategy } from '../../interfaces/strategies/message.strategy';

export class TeacherMessageStrategy implements MessageStrategy {
	getMessage(change: any) {
		return `Le professeur de ${change.oldItem.title} a changé de ${change.oldValue} à ${change.newValue}`;
	}
}
