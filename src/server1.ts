import fastify, {FastifyInstance, FastifyRequest, FastifyReply} from 'fastify';
import axios from 'axios';

interface ResponseType {
    message: string
}

const app: FastifyInstance = fastify();
const serverPort: number = 3001;
const urlResponse: string = 'http://localhost:3002';

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const response = await axios.get<ResponseType>(`${urlResponse}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
        return {
            message: 'Ошибка при получении данных с сервера №2'
        }
    }
})

app.listen(serverPort, (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    else {
        console.log(`Сервер №1 работает на порту ${serverPort}`);
    }
})