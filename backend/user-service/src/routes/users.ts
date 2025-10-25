import { Router } from 'express';
import userController from '@controllers/user';
import { createRouter } from '@FMI-MediaMaster/express-crud-router';

const routes: Router = Router();

routes.use(createRouter(userController));

export default routes;
