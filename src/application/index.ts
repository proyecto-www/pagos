'use strict';
import DynamoCliente from '../infrastructure/database/DynamoCliente';
import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { APIGatewayProxyResult } from 'aws-lambda';
import Controller from './controller/Controlller';
import ObtenerValorController from './controller/ObtenerValorController';

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResult> => {
    console.log(event)

    let controller
    let response: APIGatewayProxyResult
    if (event.requestContext.http.method == 'GET') {
        controller = new ObtenerValorController(event)
        response = await controller.exec()
    }
    else {
        controller = new Controller(event)
        response = await controller.exec()
    }



    return response
}
