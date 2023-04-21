import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { GetCars, insertCar, GetCar, updateCar, deleteCar } from "../services/items.services"

const getItem = async(req: Request, res: Response) => {
    try{
        const id = req.params.id
        const item = await GetCar(id)
        res.send(item)
    }catch(e){
     handleHttp(res, "Error al obtener el item")   
    }
}

const getItems = async (req: Request, res: Response) => {
    try{
        const items = await GetCars()
        res.send(items)
    }catch(e){
     handleHttp(res, "Error al obtener los item")   
    }   
}

const updateItems = async (req: Request, res: Response) => {
    try{
        const update = await updateCar(req.params.id, req.body )
        res.send(update)
    }catch(e){
     handleHttp(res, "Error al actualizar el item")   
    }
}

const postItem = async (req: Request, res: Response) => {
    try{
        const responseItem = await insertCar(req.body)
        res.send(responseItem)
    }catch(e){
     handleHttp(res, "Error al subir el item")   
    }
}

const deleteItem = async(req: Request, res: Response) => {
    try{
        const deleteI = await deleteCar(req.params.id)
        res.send(deleteI)
    }catch(e){
     handleHttp(res, "Error al eliminar el item")   
    }
}


export { getItem, getItems, updateItems, postItem, deleteItem }