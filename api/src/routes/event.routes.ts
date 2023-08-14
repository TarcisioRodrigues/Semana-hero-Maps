import { Router } from "express"

class EventRoutes{
    public routes:Router
    constructor(){
        this.routes=Router()
        this.initRoutes()
    }
    initRoutes(){
        this.routes.post('/')
    }
}


export {EventRoutes}