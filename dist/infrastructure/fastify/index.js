"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_planning_1 = require("../../domain/modules/check-planning");
const fastify_1 = require("fastify");
const start_bot_1 = require("../../domain/modules/start-bot");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, fastify_1.fastify)();
app.get('/', async (request, reply) => {
    return reply.send({ message: 'Le bot est en ligne' });
});
app.listen({ port: process.env.PORT || 3000 }, async (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
    await (0, start_bot_1.startBot)();
    await (0, check_planning_1.checkPlanning)();
});
