
import * as dotenv from 'dotenv'
dotenv.config();

export const env = {
    URL_GESTION_VEHICULOS :process.env.URL_GESTION_VEHICULOS as string ,
    REGION:process.env.REGION as string,
    TABLE_NAME:process.env.TABLE_NAME as string
    
    }