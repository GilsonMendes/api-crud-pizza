import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserControlle';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/sesion', new AuthUserController().handle)

export { router }