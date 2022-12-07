import { env } from "../../application/config"
import axios from 'axios'
import Vehiculo from "../../domain/model/Vehiculo"


export default class GestionVehiculosAdapter {
    private url: string = env.URL_GESTION_VEHICULOS

    constructor() {

    }


    public async conultarVehiculo(placa: string): Promise<Vehiculo> {
        const gestionVehiculosResponse = await axios.get(this.url + '/' + placa)
        const body = gestionVehiculosResponse.data.body

        const vehiculo: Vehiculo = new Vehiculo(parseInt(body.id) as number, body.placa, parseInt(body.fechahoraentrada) as number, parseInt(body.fechahorasalida) as number, body.tipodevehiculo)

        return vehiculo
    }

}