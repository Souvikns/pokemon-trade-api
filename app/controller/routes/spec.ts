import { Router } from 'express'
import path from 'path'


class SpecRouter {
    private router = Router()


    private asyncapiSpec() {
        this.router.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, "../spec/index.html"))
        })
    }


    bind() {
        this.asyncapiSpec()

        return this.router
    }
}


export const specRouter = new SpecRouter()