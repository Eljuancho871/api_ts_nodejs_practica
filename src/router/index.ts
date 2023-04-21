import { Router } from "express"
import { readdirSync } from "fs"
const PATH_FILES = __dirname
const router = Router()
const cleanFileName = (fileName: string) => fileName.split(".").shift() 

readdirSync(PATH_FILES).filter(fileName => {

    const cleanName = cleanFileName(fileName)
    if(cleanName != "index") {

        import(`./${cleanName}`).then((moduleRoutes) => {
            
            router.use(`/${cleanName}`, moduleRoutes.default.router)
        })
    }
    
})

export default router