export default class Vehiculo {

    id: number
    placa: string
    fechahoraentrada: number
    fechahorasalida: number
    tipodevehiculo: string

    constructor(id: number, placa: string, fechahoraentrada: number, fechahorasalida: number, tipodevehiculo: string) {
        this.id = id
        this.placa = placa
        this.fechahoraentrada = fechahoraentrada
        this.fechahorasalida = fechahorasalida
        this.tipodevehiculo = tipodevehiculo

    }

}