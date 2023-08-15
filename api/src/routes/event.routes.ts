import { Router } from "express"
import { EventRepositoryMogoose } from "../repositories/EventRepositoryMogoose"
import { EventController } from "../Controller/EventController"
import { EventUseCases } from "../useCases/EventUseCases"

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
        this.routes.post('/',this.eventController.create.bind(this.eventController))
    }
}


export {EventRoutes}