import { Car } from "../interface/cars.inteface"
import itemModel from "../models/item"

const insertCar = async(item: Car) => {

    const responseInsert = await itemModel.create(item)
    return responseInsert
}

const GetCars = async () => {

    const items = await itemModel.find({  })
    return items
}

const GetCar = async (id: string) => {

    const item = await itemModel.findOne({ _id: id })
    return item
}

const updateCar = async (id: string, data: Car) => {

    const item = await itemModel.findOneAndUpdate({ _id: id }, data, { new: true })
    return item
}

const deleteCar = async (id: string) => {

    const item = await itemModel.findOneAndDelete({ _id: id })
    return item
}

export { insertCar, GetCars, GetCar, updateCar, deleteCar }