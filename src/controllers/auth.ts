import { Request, Response } from "express"
import { registrarNewUser, loginUser } from "../services/aurh"

const registerCtrl = async({ body }: Request , res: Response) => {
    try{
        const responseUsesr = await registrarNewUser(body)
        res.send(responseUsesr)
    }
    catch{
        res.send("error al crear al usuario...")
    }
}

const loginCtrl = async(req: Request, res: Response) => {

    try{
        const data = await loginUser(req.body)
        res.send(data)
    }
    catch{
        res.send("error en el login...")
    }
}

export { registerCtrl, loginCtrl }