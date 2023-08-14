import { Location } from "./Locatinon";
import { Price } from "./Price";
import { User } from "./User";

class EventClass{
    constructor(
        public title:string,
        public location:Location,
        public date:Date,
        public description:string,
        public banner:string,
        public coupons:string[],
        public participants:User[],
        public price:Price[],
        public city:string


        

        
    ){

    }

}

export {EventClass}