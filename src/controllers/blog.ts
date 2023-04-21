import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try{
        
    }catch(e){
     handleHttp(res, "Error al obtener el blog")   
    }
}

const getItems = (req: Request, res: Response) => {
    try{

    }catch(e){
     handleHttp(res, "Error al obtener el blog")   
    }   
}

const updateItems = (req: Request, res: Response) => {
    try{

    }catch(e){
     handleHttp(res, "Error al obtener el blog")   
    }
}

const postItem = (req: Request, res: Response) => {
    try{

    }catch(e){
     handleHttp(res, "Error al obtener el blog")   
    }
}

const deleteItem = (req: Request, res: Response) => {
    try{

    }catch(e){
     handleHttp(res, "Error al obtener el blog")   
    }
}


export { getItem, getItems, updateItems, postItem, deleteItem }