import {NextFunction, Request, Response} from "express";
import {ClientService} from "../services/client.service";

export default class ClientController {
    static async create(req:Request,res:Response,next:NextFunction) {

        try{
            const response =  await ClientService.create(req,res)
            return res.json({
                status:200,
                response
            })
        }catch (e) {
            next(e)
        }
    }

    static async get(req:Request,res:Response,next:NextFunction) {

        try{
            const response =  await ClientService.get(req,res)
            return res.json({
                status:200,
                response
            })
        }catch (e) {
            next(e)
        }
    }
}