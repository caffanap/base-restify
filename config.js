import dotenv from "dotenv";
import corsMiddleware from "restify-cors-middleware2";

dotenv.config()

const CORS = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ["*"],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
})

export default {
    CORS,
    APP_NAME: process.env.APP_NAME || 'app-server',
    APP_PORT: process.env.APP_PORT || 5000,

    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    
    MONGO_DB_HOST: process.env.MONGO_DB_HOST,
    MONGO_DB_USER: process.env.MONGO_DB_USER,
    MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
}