import ClientEntity from "../entities/client.entity";
import { DataSource } from "typeorm"
import {config} from "../db/config";

const dataSource = new DataSource(config)
dataSource.initialize()


export class ClientService {

    static async create(name:string, email:string) {
        await dataSource.getRepository(ClientEntity).save({name,email})
    }
}