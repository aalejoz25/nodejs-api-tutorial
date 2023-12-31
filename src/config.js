import {config} from "dotenv";

config();

export default{
    host : process.env.DATABASE_HOST || "",
    database : process.env.DATABASE || "",
    user : process.env.DATABASE_USER || "", 
    password : process.env.DATABASE_PASSWORD|| "",
    port : process.env.DATABASE_PORT|| ""
};