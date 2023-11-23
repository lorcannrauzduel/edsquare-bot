import { MessageStrategy } from '../interfaces/strategies/message.strategy';
import { DefaultStrategy } from './message/default.strategy';
import { RoomMessageStrategy } from './message/room.message';
import { TeacherMessageStrategy } from './message/teacher.message';
import { TimeMessageStrategy } from './message/time.strategy';

export const strategies: any = {
	start: new TimeMessageStrategy(),
	end: new TimeMessageStrategy(),
	room: new RoomMessageStrategy(),
	teacher: new TeacherMessageStrategy(),
};

export const getStrategy = (change: any): MessageStrategy => {
	return strategies[change.key] || new DefaultStrategy();
};
