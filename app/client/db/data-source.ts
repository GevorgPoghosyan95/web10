import {DataSource} from "typeorm";
import migrations from "./migrations-list";

export const AppDataSource =  new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'pako',
    password:'test',
    database: 'client',
    entities: ['app/client/**/entities/*.entity.ts'],
    migrations
})



