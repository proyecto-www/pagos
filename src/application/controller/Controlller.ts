import { APIGatewayProxyEventV2 } from "aws-lambda";
import ResponseCustom from "./response/ResponseCustom";


export default class Controller  {

private event: APIGatewayProxyEventV2

    constructor(event: APIGatewayProxyEventV2) {
        this.event = event
    }

    public async exec(): Promise<ResponseCustom>{        
        return ResponseCustom.badRequestJson()
    }


}
