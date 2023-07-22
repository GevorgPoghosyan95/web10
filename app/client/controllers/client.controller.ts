import {NextFunction, Request, Response} from "express";
import {ClientService} from "../services/client.service";

export default class ClientController {
    static async create(req:Request,res:Response,next:NextFunction) {

        try{
            const {name,email} = req.body;
            const response =  await ClientService.create(name,email)
            return res.json({
                status:200,
                response
            })
        }catch (e) {
            next(e)
        }
    }
}