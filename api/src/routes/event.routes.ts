import { Router } from "express"
import { EventRepositoryMogoose } from "../repositories/EventRepositoryMogoose"
import { EventController } from "../Controller/EventController"
import { EventUseCases } from "../useCases/EventUseCases"
import { upload } from "../infra/multer"

class EventRoutes{
    public routes:Router
    private eventController:EventController
    constructor(){
        this.routes=Router()
        const eventRepository=new EventRepositoryMogoose()
        const eventUseCase=new EventUseCases(eventRepository)
        this.eventController=new EventController(eventUseCase)
        this.initRoutes()
    }
    initRoutes(){
        this.routes.post('/',upload.fields([{name:'banner',maxCount:1,},{name:'flyers',maxCount:3}]),this.eventController.create.bind(this.eventController))
    }
}


export {EventRoutes}