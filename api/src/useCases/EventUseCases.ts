import { EventClass } from "../entities/Event";
import { EventRepository } from "../repositories/EventRepository";

class EventUseCases{
constructor(private eventRepository:EventRepository){}

async create(eventData:EventClass){
    const event=await this.eventRepository.add(eventData)

    return event
}
}


export {EventUseCases}