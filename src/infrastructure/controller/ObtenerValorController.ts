import { APIGatewayProxyEventV2 } from "aws-lambda";
import Controller from "./Controlller";
import ResponseCustom from "./response/ResponseCustom";


export default class ObtenerValorController extends Controller  {



    public exec(): ResponseCustom{
        return new ResponseCustom(200,'jeje')
    }


}
