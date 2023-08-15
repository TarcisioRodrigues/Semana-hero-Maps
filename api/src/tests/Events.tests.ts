import request from 'supertest'
import { App } from '../app'

const app =new App().app
describe('Event test',()=>{
    it('/POST Event',async()=>{
        const event={
            title:"CASCANHA",
            price:[{sector:"pista",amount:'20'}],
            description:'casa da mãe joana',
            city:'Maranhão',
            location:{
                latitude:'60.7129',
                longitude:"-105.7689"
            },
            coupons:[],
            date:new Date(),
            participants:[]
        }
        const response=await request(app).post('/events')
        .field('title',event.title)
        .field('city',event.city)
        .field('location[latitute]',event.location.latitude)
        .field('location[longitude]',event.location.longitude)
        .field('price[sector]',event.price[0].sector)
        .field('price[amount]',event.price[0].amount)
        .field('description',event.description)
        .field('coupons',event.coupons)
        .field('participants',event.participants)
        .attach('banner','/Users/tarcisiorodrigues/Downloads/dark.jpg')
        .attach('flyers','/Users/tarcisiorodrigues/Downloads/dark.jpg')
        .attach('flyers','/Users/tarcisiorodrigues/Downloads/dark.jpg')
        if(response.error){
                console.log("Erro aqui",response.error)
        }

        expect(response.status).toBe(201)
        expect(response.body).toEqual({message:"Criado com SUcesso"})

    })
})

