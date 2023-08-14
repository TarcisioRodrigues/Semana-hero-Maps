import mongoose from "mongoose"
import { EventClass } from "../entities/Event"
import { EventRepository } from "./EventRepository"

const eventSchema=new mongoose.Schema({
    title:String,
    location:{
        latitude:String,
        longitude:String,
    },
    date:Date,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    description:String,
    categories:[String],
    banner:String,
    flyers:[String],
    price:{
        type:Array
    },
    city:String,
    participants:{
        type:Array,
        ref:"User"
    }
})

const EventModel=mongoose.model('Event',eventSchema)
class EventRepositoryMogoose implements EventRepository{
    async add(event:EventClass):Promise<EventClass>{
     const eventModel=new EventModel(event)
     await eventModel.save()

     return event
    }

}

export{EventRepositoryMogoose}