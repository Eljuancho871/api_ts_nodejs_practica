import { Schema, Model, model, Types } from "mongoose"
import { User } from "../interface/user.interface"

const UserSchema = new Schema<User>(
    {
        email:{ type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        description:{ type: String, default: "holaa..." },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const UserModel = model("users", UserSchema)
export default UserModel