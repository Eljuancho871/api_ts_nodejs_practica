import { User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt, verfied } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registrarNewUser = async(body: User) => {

    const checkIs = await UserModel.findOne({ email: body.email })
    if(checkIs) return "Ya existe el usuario..."

    let { password } = body
    password = await encrypt(password)
    body["password"] = password 
    const registrarNewUser = await UserModel.create(body)

    return registrarNewUser
}

const loginUser = async({ email, password }: User) => {

    const checkIs = await UserModel.findOne({ email: email })
    if(!checkIs) return "Usuario no encontrado..."

    const passHash = checkIs.password
    const idCorrect = await verfied(password, passHash)

    if(!idCorrect) return "Contraseña incorrecta..."

    const id  = checkIs.id
    console.log(id);
    
    const token = await generateToken(`${id}`)
    const data = { token, user: checkIs }
    return data
}


export { registrarNewUser, loginUser }