"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChanges = void 0;
const lodash_1 = require("lodash");
const getChanges = (oldData, newData) => {
    let list = [];
    if (!oldData || !newData) {
        return {
            list,
            hasChanges: false,
        };
    }
    oldData.forEach((oldItem) => {
        newData.forEach((newItem) => {
            if (oldItem.id === newItem.id) {
                Object.keys(oldItem).forEach((key) => {
                    if (!(0, lodash_1.isEqual)(oldItem[key], newItem[key])) {
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
exports.getChanges = getChanges;
