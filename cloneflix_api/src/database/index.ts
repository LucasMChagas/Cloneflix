import 'dotenv/config'
import { Sequelize, Dialect } from "sequelize";

export const database = new Sequelize({
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port : Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    define: {
        underscored: true        
    }
})