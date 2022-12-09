import axios from 'axios'
import MercadoPago from 'mercadopago'
export default class MercadoPagoCliente {
    private prefenciasURL: string = 'https://api.mercadopago.com/checkout/preferences'
    private paymentURL: string = 'https://api.mercadopago.com/v1/payments/'
    constructor() {

    }
    public async crearPreferencia(precio: number,placa:string): Promise<string> {
        const body = {
            "items": [
                {
                    "title": "Tiempo de parqueo",
                    "description": "Costo por cantidad de horas parqueado",
                    "picture_url": "https://parking-psi-livid.vercel.app/static/media/logo.89f336afa5f504150692.png",
                    "quantity": 1,
                    "unit_price": precio
                }
            ],
            "external_reference": placa,
            "notification_url": "https://8z764jo9x6.execute-api.us-east-1.amazonaws.com",
            "back_urls": {
                "success": "https://parking-psi-livid.vercel.app/info-placa"
            }
        }

        const token = {
            headers: {
                'Authorization': 'Bearer APP_USR-8404873350322082-120823-387d703592a0d1f8df30c4ae1d9bf4e0-1258922250'
            }
        }
        const respuesta = await axios.post(this.prefenciasURL, body,token)
        console.log(respuesta.data)
        return respuesta.data.init_point

    }
    public async obtenerPrecioPagado(id: string) {
     

        const token = {
            headers: {
                'Authorization': 'Bearer APP_USR-8404873350322082-120823-387d703592a0d1f8df30c4ae1d9bf4e0-1258922250'
            }
        }
        const respuesta = await axios.get(this.paymentURL+id,token)
        console.log(respuesta.data)
        return {valorPagado:respuesta.data.transaction_amount,placa:respuesta.data.external_reference}

    }
}