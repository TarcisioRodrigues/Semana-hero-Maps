import { EventClass } from "../entities/Event";
import { Location } from "../entities/Locatinon";
import { IFilterProps } from "../interfaces/IFilterProps";
interface EventRepository{
    add(event:EventClass):Promise<EventClass>
    findByLocationAndDate(location:Location,date:Date):Promise<EventClass|undefined>
    findEventsByCity(city: string): Promise<EventClass[]>;
    findEventsByCategory(category: string): Promise<EventClass[]>;
  findEventsByFilter({
    latitude,
    longitude,
    name,
    date,
    category,
    radius,
    price,
  }: IFilterProps): Promise<EventClass[]>;
  findEventsMain(date: Date): Promise<EventClass[]>;
  findEventsByName(name: string): Promise<EventClass[]>;
  findEventById(id: string): Promise<EventClass | undefined>;
  update(event: EventClass, id: string): Promise<any>;
}


export{EventRepository}