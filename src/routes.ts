import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserControlle";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUseController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCategotryController } from "./controllers/category/CreateCategotryController";

const router = Router();

// Rotas de users
router.post("/users", new CreateUserController().handle);
router.post("/sesion", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUseController().handle);
// Rotas de category
router.post("/category", isAuthenticated, new CreateCategotryController().handle);

export { router };
