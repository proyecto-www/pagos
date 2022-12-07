import { DynamoDBClient, GetItemCommand, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { NOTFOUND } from "dns";
import { env } from "../../application/config"
import {unmarshall} from '@aws-sdk/util-dynamodb'

const REGION = "us-east-1";



export default class DynamoCliente {

    private ddbClient: DynamoDBClient

    constructor() {
        this.ddbClient = new DynamoDBClient({ region: env.REGION });
    }
    public async obtenerTarifa(tipoDeVehiculo: string) {

        const params = {
            TableName: env.TABLE_NAME, //TABLE_NAME
            Key:{
                'tipoDeVehiculo':{S:tipoDeVehiculo}
            }

        };
        const respuesta = await this.ddbClient.send(new GetItemCommand(params))

        let tarifa = unmarshall(respuesta.Item!)
        return tarifa


    }
 


}