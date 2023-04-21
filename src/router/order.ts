import { Router } from "express"
import { get_all } from "../controllers/order"
import { checkJwt } from "../middlewares/session"
const router = Router()

router.get("/", checkJwt, get_all)



export default {router}