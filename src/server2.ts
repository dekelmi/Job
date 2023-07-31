import fastify, {FastifyInstance, FastifyRequest, FastifyReply} from 'fastify';

interface ResponseType {
    message: string
}

const app: FastifyInstance = fastify();
const serverPort: number = 3002;

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const response: ResponseType = {
        message: 'Ответ от сервера №2: Всё работает исправно!'
    }
    return response;
});

app.listen(serverPort, (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    else {
        console.log(`Сервер №2 работает на порту ${serverPort}`);
    }
})