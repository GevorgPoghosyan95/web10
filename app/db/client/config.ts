import {ConnectionOptions} from "typeorm";
import * as process from "process";
import migrationsList from "./migrations-list";
import ClientEntity from "../../entities/client/client.entity";

export const config: ConnectionOptions = {
    name:'clientConnection',
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_CLIENT_DB,
    entities: [ClientEntity],
    synchronize:false,
    migrations:migrationsList,
    migrationsRun: true,
    logging: true,
}

