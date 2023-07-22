import {createConnections} from "typeorm";
import {config as clientConfig} from "./client/config";
import {config as subscriptionConfig} from "./subscription/config";

export const connectAll = async ()=>{
    await createConnections([
        clientConfig,subscriptionConfig
    ])
}