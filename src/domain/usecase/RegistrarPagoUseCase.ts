import DynamoCliente from "../../infrastructure/database/DynamoCliente"
import GestionVehiculosAdapter from "../../infrastructure/adapter/GestionVehiculosAdapter"
import Vehiculo from "../model/Vehiculo"
import MercadoPagoCliente from "../../infrastructure/adapter/MercadoPago"
import { IoTThingsGraph } from "aws-sdk"

export default class RegistrarPagoUseCase {

    private gestionVehiculos: GestionVehiculosAdapter
    private mercadoPago: MercadoPagoCliente


    constructor() {

        this.gestionVehiculos = new GestionVehiculosAdapter()
        this.mercadoPago = new MercadoPagoCliente()
    }

    public async registrar(idPago: string) {

        const datosPago = await this.mercadoPago.obtenerPrecioPagado(idPago)
        console.log(datosPago)
        const registrarPago = await this.gestionVehiculos.registrarPago(datosPago.placa,idPago,datosPago.valorPagado)





    }




}