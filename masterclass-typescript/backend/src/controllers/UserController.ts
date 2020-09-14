import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Emanuel', email: 'emanuel301@live.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res:Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Emanuel Massafera', 
                email: 'emanuel301@live.com'
            },
            message: { 
                subject: 'TypeScript', 
                body: 'Aprendendo TypeScript'
            },
        });

        return res.send('Email enviado.')
    }
};
