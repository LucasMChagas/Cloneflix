import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "cloneflix_development",
    username: "postgres",
    password: "19941183",
    define: {
        underscored: true
    }

})