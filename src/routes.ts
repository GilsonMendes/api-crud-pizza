import { Router} from 'express';
import { CreateUserController } from './controllers/user/CreateUserControlle';
const router = Router();

router.post('/users', new CreateUserController().handle)

export { router }