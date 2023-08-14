import { EventClass } from "../entities/Event";

interface EventRepository{
    add(event:EventClass):Promise<EventClass>
}


export{EventRepository}