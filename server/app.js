import { config } from "dotenv"
config({
    path:"./.env.local"
})
import express from "express"
import cors from "cors"
import connectDB from "./db/db.js"
import routes from "./routes.js"
const app=express()

app.use(cors())
app.use(express.json())
app.use(routes)
connectDB()

app.listen(process.env.PORT,()=>{
    console.log("Running at "+ process.env.PORT)
})

