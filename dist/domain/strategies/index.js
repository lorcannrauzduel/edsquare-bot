"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStrategy = exports.strategies = void 0;
const default_message_1 = require("./message/default.message");
const room_message_1 = require("./message/room.message");
const teacher_message_1 = require("./message/teacher.message");
const time_message_1 = require("./message/time.message");
exports.strategies = {
    start: new time_message_1.TimeMessageStrategy(),
    end: new time_message_1.TimeMessageStrategy(),
    room: new room_message_1.RoomMessageStrategy(),
    teacher: new teacher_message_1.TeacherMessageStrategy(),
};
const getStrategy = (change) => {
    return exports.strategies[change.key] || new default_message_1.DefaultMessageStrategy();
};
exports.getStrategy = getStrategy;
