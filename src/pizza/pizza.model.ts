import * as mongoose from 'mongoose'; 

export  const PizzaSchema = new mongoose.Schema({
    name: { type: String, required:true},
    description: { type: String, required:true},
    image_url: { type: String, required:true},
    category: { type: String, required:true},
    price: { type: String, required:true},
    total_orders: { type: String, required:true}
})
export interface Pizza extends mongoose.Document{
     _id: string,
     name: string,
     description: string,
     image_url: string,
     category: string,
     price: number,
     total_orders: number
}