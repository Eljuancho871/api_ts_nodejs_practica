import { sign, verify } from "jsonwebtoken"
import "dotenv/config"
const JWT_SECRET = process.env.JWT_SECRET || "secretodefault01"

const generateToken = async(id: string) => {
    const jwt = sign({ id },  JWT_SECRET, { expiresIn: "2h" })
    return jwt
}

const verifyTiken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    
    return isOk
}

export { generateToken, verifyTiken }