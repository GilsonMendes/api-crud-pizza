import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserControlle';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUseController } from './controllers/user/DetailUserController';


const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/sesion', new AuthUserController().handle)
router.get('/me',  new DetailUseController().handle)

export { router }