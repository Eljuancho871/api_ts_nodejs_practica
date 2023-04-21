import { NextFunction, Request, Response, response } from "express";
import { verifyTiken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try{
        const jwtByUser = req.headers.authorization || ""
        const jwt = jwtByUser.split(" ").pop()
        const isOk = verifyTiken(`${jwt}`)
        if(!isOk) return res.send("Login invalido...")
        
        req.user = isOk
        next()
    }
    catch(err){
        res.status(400)
        res.send("session no valida...")
    }
}

export { checkJwt }