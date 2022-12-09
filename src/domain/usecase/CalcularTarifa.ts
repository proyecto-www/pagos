import DynamoCliente from "../../infrastructure/database/DynamoCliente"
import GestionVehiculosAdapter from "../../infrastructure/adapter/GestionVehiculosAdapter"
import Vehiculo from "../model/Vehiculo"
import MercadoPagoCliente from "../../infrastructure/adapter/MercadoPago"
import { IoTThingsGraph } from "aws-sdk"

export default class CalcularTarifa {

    private dynamo: DynamoCliente
    private gestionVehiculos: GestionVehiculosAdapter
    private mercadoPago:MercadoPagoCliente


    constructor() {

        this.gestionVehiculos = new GestionVehiculosAdapter()
        this.dynamo = new DynamoCliente()
        this.mercadoPago = new MercadoPagoCliente()
    }

    public async calcular(placa:string):Promise<{valorAPagar:number,urlPago:string}>{

        const vehiculo:Vehiculo= await this.gestionVehiculos.conultarVehiculo(placa)

        const tarifaVehiculo = await this.dynamo.obtenerTarifa(vehiculo.tipodevehiculo)


        const tarifa:number = tarifaVehiculo.valorPorHora
        
        const ahora:number = Date.now()

        const horasUso:number = Math.ceil((ahora-vehiculo.fechahoraentrada)/3600000)

        const valorAPagar:number = horasUso*tarifa

        const urlPago = await this.mercadoPago.crearPreferencia(valorAPagar,placa)


        return {valorAPagar:valorAPagar,urlPago:urlPago}


    }




}