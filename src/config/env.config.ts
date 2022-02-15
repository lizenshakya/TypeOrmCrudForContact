import * as dotenv from "dotenv";
import path from 'path';
dotenv.config({ path: path.join(__dirname+'/.env') });

export const envConfig = {
    PORT: process.env.PORT,
    MYSQL_PORT: process.env.MYSQL_PORT,
    NODE_ENV: process.env.NODE_ENV,
    TS_NODE: process.env.TS_NODE,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_DB: process.env.MYSQL_DB
}