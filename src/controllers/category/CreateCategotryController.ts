import { Request, Response } from "express";
import {CreateCategoryService} from '../../services/category/CreateCategoryService';

class CreateCategotryController {
    async handle(req: Request, res: Response){
        const {name} = req.body;
        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({
            name
        });

        return res.json(category);
    }
}

export { CreateCategotryController };
