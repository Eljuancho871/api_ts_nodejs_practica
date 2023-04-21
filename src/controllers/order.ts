import { Request, Response } from "express"
import { get_all_service } from "../services/order"
import { JwtPayload } from "jsonwebtoken"

interface RequestExt extends Request{
    user?: any
}

const get_all = (req: RequestExt, res: Response) => {

    try{
        const id = `${req.user.id}`
        
        res.send({ "id": id } )
    }   
    catch{
        res.send("Error")
    }
}

export {get_all}