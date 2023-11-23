import { MessageStrategy } from '../../interfaces/strategies/message.strategy';

export class DefaultStrategy implements MessageStrategy {
	getMessage(change: any) {
		return `La propriété ${change.key} a changé de ${change.oldValue} à ${change.newValue}`;
	}
}
