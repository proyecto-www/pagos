import GestionVehiculosAdapter from "../../infrastructure/adapter/GestionVehiculosAdapter";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import Controller from "./Controlller";
import ResponseCustom from "./response/ResponseCustom";
import CalcularTarifa from "../../domain/usecase/CalcularTarifa";


export default class ObtenerValorController {

    private event: APIGatewayProxyEventV2

    constructor(event: APIGatewayProxyEventV2) {
        this.event = event
    }


    public async exec(): Promise<ResponseCustom> {

        const placa: string = this.event.pathParameters!.placa as string

        const calcularTarifaUseCase: CalcularTarifa = new CalcularTarifa()
        let respuesta
        try {
            respuesta= await calcularTarifaUseCase.calcular(placa)
            console.log(respuesta)
        } catch (error) {
            return new ResponseCustom(400,error)
        }

        return new ResponseCustom(200, {valorAPagar:respuesta})
    }


}
