import { Router } from 'express';

import PagController from './app/controllers/PagController';

import IdControler from './app/controllers/IdControler';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/offset/:of/limit/:lt', PagController.show)

routes.get('/repository/:user/', IdControler.show)

export default routes;
