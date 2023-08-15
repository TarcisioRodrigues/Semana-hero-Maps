import mongoose from "mongoose"

export const connect=async()=>{
    // senha:YytAsW5biC3fLmSy
    try{
        await mongoose.connect(
         'mongodb+srv://tarcisio:YytAsW5biC3fLmSy@cluster0.gf84b.mongodb.net/?retryWrites=true&w=majority')
         console.log("Connectado")
    }catch(error){
        console.log(error)

    }
}