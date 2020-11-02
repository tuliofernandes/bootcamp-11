import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Túlio',
        email: 'tuliomf09@gmail.com',
        password: 'minti4',
        techs: ['React', { title: 'Node', experience: 90 }]
    });

    return response.json({ user });
}