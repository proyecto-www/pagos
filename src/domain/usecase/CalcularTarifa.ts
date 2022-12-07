import DynamoCliente from "../../infrastructure/database/DynamoCliente"
import GestionVehiculosAdapter from "../../infrastructure/adapter/GestionVehiculosAdapter"
import Vehiculo from "../model/Vehiculo"

export default class CalcularTarifa {

    private dynamo: DynamoCliente
    private gestionVehiculos: GestionVehiculosAdapter


    constructor() {

        this.gestionVehiculos = new GestionVehiculosAdapter()
        this.dynamo = new DynamoCliente()
    }

    public async calcular(placa:string):Promise<number>{

        const vehiculo:Vehiculo= await this.gestionVehiculos.conultarVehiculo(placa)

        const tarifaVehiculo = await this.dynamo.obtenerTarifa(vehiculo.tipodevehiculo)

        const tarifa:number = tarifaVehiculo.valorPorHora
        
        const ahora:number = Date.now()

        const horasUso:number = Math.ceil((ahora-vehiculo.fechahoraentrada)/3600000)

        const valorAPagar:number = horasUso*tarifa

        return valorAPagar


    }




}