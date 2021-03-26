import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orders } from './orders.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Orders') private readonly orderModel: Model<Orders>,
  ) {}

  async addOrder(order) {
   let newOrder = new this.orderModel(order);
   let saved = await this.orderModel.insertMany(newOrder);
  
   return (saved)? newOrder: false;

  }
}
