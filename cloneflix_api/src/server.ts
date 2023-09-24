import 'dotenv/config'
import express from "express";
import {database} from "./database"
import {adminJs, adminJsRouter} from "./adminjs"

const app = express();

app.use(express.static("public"));
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT;

app.listen(PORT, ()=>{ 
    database.authenticate().then(()=>{
        console.log("Database connection successfull")
    }).catch((error)=>{
        console.log(`Error connecting to database ${error}`);
    })
    console.log(`Server started successfuly at port ${PORT}`);
});