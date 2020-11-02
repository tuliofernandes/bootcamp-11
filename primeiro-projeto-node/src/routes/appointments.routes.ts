import { response, Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const appointment = {
        id: uuid(),
        provider,
        date,
    };

    return response.json(appointment);
});

export default appointmentsRouter;
