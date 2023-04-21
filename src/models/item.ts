import { Schema, Model, model, Types } from "mongoose"
import { Car } from "../interface/cars.inteface"

const itemSchema = new Schema<Car>(
    {
        color:{ type: String, required: true },
        gas: { type: String, required: true, enum: [ "gasoline", "electric" ] },
        year: { type: Number, required: true },
        description:{ type: String, required: true },
        price: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const itemModel = model("items", itemSchema)
export default itemModel