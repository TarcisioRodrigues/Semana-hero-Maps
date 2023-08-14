import mongoose from "mongoose"

export const connect=async()=>{
    // senha:AM7l2csvFdEOFAAf
    try{
        await mongoose.connect(
         'mongodb+srv://root:AM7l2csvFdEOFAAf@clusterdev.7ram24a.mongodb.net/?retryWrites=true&w=majority')
         console.log("Connectado")
    }catch(error){


    }
}