import * as mongoose from 'mongoose'; 

export  const OrdersSchema = new mongoose.Schema({
    userId: { type: String, required:true},
    pizzaList: { type: Array, required:true},
    status: { type: Number, required:true},
    totalPrice: { type: Number, required:true},
})
export interface Orders extends mongoose.Document{
     _id: string,
     userId: string,
     pizzaList: number[],
     date: Date,
     status: number,
     totalPrice: number
}