import { checkPlanning } from '../../domain/modules/check-planning';
import { fastify } from 'fastify';
import { startBot } from '../../domain/modules/start-bot';
import { config } from 'dotenv';
config();

const app = fastify();

app.get('/', async (request, reply) => {
	return reply.send({ message: 'Le bot est en ligne' });
});

app.listen(
	{ port: (process.env.PORT as any) || 3000 },
	async (err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.log(`Server listening at ${address}`);
		await startBot();
		await checkPlanning();
	}
);
