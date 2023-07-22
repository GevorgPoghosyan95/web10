import {NextFunction, Request,Response} from "express";
import Joi from 'joi';

const signUpSchema = Joi.object({
    name: Joi.string().min(3).required(),
    region: Joi.string().valid('ARM','USA', 'FRA').required(),
    deviceType:Joi.string().valid('IOS','Android').required(),
    email: Joi.string().email().required(),
});
export default class ValidationMiddleware {
    static validate(req:Request,res:Response,next:NextFunction) {
        const { error } = signUpSchema.validate(req.body);

        if (error) {
            return res.status(400).json(error)
        } else {
           next()
        }
    }
}