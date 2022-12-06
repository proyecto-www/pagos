'use strict';
import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { APIGatewayProxyResult } from 'aws-lambda';
import Controller from '../infrastructure/controller/Controlller';
import ObtenerValorController from '../infrastructure/controller/ObtenerValorController';
import ResponseCustom from '../infrastructure/controller/response/ResponseCustom';

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResult> => {

    let controller:Controller
    let response: APIGatewayProxyResult

    if(event.requestContext.http.method=='GET'){
        controller = new ObtenerValorController(event)
        response = await controller.exec()
    }
    else{
        controller = new Controller(event)
        response = await controller.exec()
    }



    return response
}