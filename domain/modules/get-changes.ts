import { isEqual } from 'lodash';
import { SchoolEvent } from '../interfaces/entities/school-event.entity';

export const getChanges = (
	oldData: SchoolEvent[],
	newData: SchoolEvent[]
): {
	list: {
		id: string;
		key: string;
		oldValue: any;
		newValue: any;
		oldItem: SchoolEvent;
		newItem: SchoolEvent;
	}[];
	hasChanges: boolean;
} => {
	let list: any[] = [];
	if (!oldData || !newData) {
		return {
			list,
			hasChanges: false,
		};
	}
	oldData.forEach((oldItem: any) => {
		newData.forEach((newItem: any) => {
			if (oldItem.id === newItem.id) {
				Object.keys(oldItem).forEach((key) => {
					if (!isEqual(oldItem[key], newItem[key])) {
						list.push({
							id: oldItem.id,
							key,
							oldValue: oldItem[key],
							newValue: newItem[key],
							oldItem,
							newItem,
						});
					}
				});
			}
		});
	});

	return {
		list,
		hasChanges: list.length > 0,
	};
};
