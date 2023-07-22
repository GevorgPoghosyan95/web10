import {getConnection} from "typeorm";
import {SubscriptionEntity} from "../entities/subscription/subscription.entity";

export class SubscriptionService {
    static async find(region:string,deviceType:string) {
        const clientConnection = getConnection("subscriptionConnection");
        const existingSubscription = await clientConnection.createQueryBuilder(SubscriptionEntity,'s').where({region,deviceType}).getOne()
        if (!existingSubscription) {
            throw new Error('There are no subscription for this user!')
        }
        return existingSubscription;
    }

    static async findById(id:number) {
        const clientConnection = getConnection("subscriptionConnection");
        return await clientConnection.createQueryBuilder(SubscriptionEntity,'s').where({id}).getOne()
    }
}