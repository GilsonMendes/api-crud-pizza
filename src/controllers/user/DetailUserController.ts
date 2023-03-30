import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUseController {
    async handle(req: Request, res: Response){
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute();

        return res.json(user);

    }
}

export {DetailUseController};