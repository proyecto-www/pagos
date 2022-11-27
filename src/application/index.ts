'use strict';
import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { APIGatewayProxyResult } from 'aws-lambda';
import ResponseCustom from '../infrastructure/controller/response/ResponseCustom';

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResult> => {

    return new ResponseCustom(400,'No hay metodos configurados')
}