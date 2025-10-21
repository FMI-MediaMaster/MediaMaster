import { Request, Response } from 'express';
import { BaseController } from '@FMI-MediaMaster/express-crud-router';
import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'
import config from '@FMI-MediaMaster/load-dotenv';
import UserService from '@services/user';

// TODO: use
const supabase = createClient<Database>(config.SUPABASE_URL, config.SUPABASE_KEY)

export default class UserController extends BaseController {
    private service = new UserService();

    readAll = (req: Request, res: Response): void => {
        res.ok(this.service.readAll());
    };

    read = (req: Request, res: Response): void => {
        const user = this.service.readById(Number(req.params.id));
        if (!user) {
            res.notFound('User not found');
            return;
        }
        res.ok(user);
    };

    create = (req: Request, res: Response): void => {
        const newUser = this.service.create(req.body);
        res.created(newUser);
    };

    update = (req: Request, res: Response): void => {
        const updated = this.service.update(Number(req.params.id), req.body);
        if (!updated) {
            res.notFound('User not found');
            return;
        }
        res.ok(updated);
    };

    delete = (req: Request, res: Response): void => {
        const success = this.service.delete(Number(req.params.id));
        if (!success) {
            res.notFound('User not found');
            return;
        }
        res.noContent();
    };
}
