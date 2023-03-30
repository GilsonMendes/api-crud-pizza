import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUseController {
    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        console.log("Id do user", user_id);
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute();

        return res.json(user);

    }
}

export {DetailUseController};
