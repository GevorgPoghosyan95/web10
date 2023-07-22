import {ConnectionOptions} from "typeorm";
import * as process from "process";
import migrationsList from "./migrations-list";
import {SubscriptionEntity} from "../../entities/subscription/subscription.entity";

export const config: ConnectionOptions = {
    name:'subscriptionConnection',
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_SUBSCRIPTION_DB,
    entities: [SubscriptionEntity],
    synchronize:false,
    migrations:migrationsList,
    migrationsRun: true,
    logging: true,
}

