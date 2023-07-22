import ClientEntity from "../entities/client/client.entity";
import {getConnection} from "typeorm";
import { Request, Response} from "express";
import {SubscriptionService} from "./subscription.service";
export class ClientService {
    static async create(req:Request,res:Response) {
        const {name,email,region,deviceType} = req.body;
        const clientConnection = getConnection("clientConnection");
        const existingClient = await clientConnection.createQueryBuilder(ClientEntity,'c').where({email}).getOne()
        if (existingClient) {
            throw new Error("Email already in use!")
        }

        const subscription = await SubscriptionService.find(region,deviceType);

        let client =  await clientConnection.getRepository(ClientEntity).save({name,email,subscription_id:subscription.id})
        return {
            id:client.id,
            name:client.name,
            email:client.email,
            subscription
        }

    }

    static async get(req:Request,res:Response) {
        const id = req.params.id;
        const clientConnection = getConnection("clientConnection");
        const client =  await clientConnection.createQueryBuilder(ClientEntity,'c').where({id}).getOne()
        if(!client){
            throw new Error("Client not found!")
        }
        const subscription =  await SubscriptionService.findById(client.subscription_id);
        return {
            id:client.id,
            name:client.name,
            email:client.email,
            subscription
        }
    }
}