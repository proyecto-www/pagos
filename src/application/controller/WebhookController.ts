import GestionVehiculosAdapter from "../../infrastructure/adapter/GestionVehiculosAdapter";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import Controller from "./Controlller";
import ResponseCustom from "./response/ResponseCustom";
import CalcularTarifa from "../../domain/usecase/CalcularTarifa";
import RegistrarPagoUseCase from "../../domain/usecase/RegistrarPagoUseCase";


export default class WebhookController {

    private event: APIGatewayProxyEventV2

    constructor(event: APIGatewayProxyEventV2) {
        this.event = event
    }


    public async exec(): Promise<ResponseCustom> {

        const idPago = this.event.queryStringParameters!.id as string
        const resgistrarPago = new RegistrarPagoUseCase()
        let respuesta
        try {
            respuesta = await resgistrarPago.registrar(idPago)
            console.log(respuesta)
        } catch (error) {
            return new ResponseCustom(400, error)
        }

        return new ResponseCustom(200, { respuesta })
    }


}
