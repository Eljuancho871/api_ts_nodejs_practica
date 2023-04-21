import express from "express"
import cors from "cors"
import "dotenv/config"
import router from "./router"
import db from "./config/mongo"
const app = express()
const PORT = process.env.PORT || 3000

// Midleweres

app.use(express.json())
app.use(cors())
db().then(() => console.log("connecion DB exitosa...")).catch(err => console.log("error coneccion DB..."))

// router

app.use(router)

// listening

app.listen(PORT, () => console.log("servidor " + PORT + "..."))

export default app