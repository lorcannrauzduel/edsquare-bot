export interface MessageStrategy {
	getMessage(change: any): string;
}
