"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const domain_1 = require("../../domain");
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
    await (0, domain_1.startBot)();
    await (0, domain_1.monitorPlanning)();
});
