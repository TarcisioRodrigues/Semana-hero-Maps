import express, {  Application } from 'express'
import { connect } from './infra/database'

class App{
    public app:Application
    constructor(){
        this.app=express()
        this.middlewaresInitialize()
        this.initializeRoutes()
        this.interceptionErrors()
        connect()
    }

initializeRoutes(){

}
interceptionErrors(){
    // this.app.use()
}
listen(){
    this.app.listen(3333,()=>console.log("Botar pra gerar"))
}
middlewaresInitialize(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended:true}))
}

}

export {App}