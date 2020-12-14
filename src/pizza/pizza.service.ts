import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pizza } from './pizza.model';

@Injectable()
export class PizzaService {
  private pizzaList: Pizza[] = [];
  constructor(
    @InjectModel('Pizza') private readonly pizzaModel: Model<Pizza>,
  ) {}

  async getCategoryBasedPizza(category) {
    const allPizzaList = await this.pizzaModel.find({category}).exec();
    return allPizzaList;
  }
  async getAllPizza() {
    const allPizzaList = await this.pizzaModel.find().exec();
    return allPizzaList;
  }

  async getSinglePizza(id: string) {
    const singlePizza = await this.pizzaModel.findById(id);
    if (!singlePizza) throw new NotFoundException('Pizza not found');
    return singlePizza;
  }

  async deletePizza(id: string) {
    const toBeDeletedPizza = await this.pizzaModel.findById(id);
    if (!toBeDeletedPizza) throw new NotFoundException('Pizza not found');
    toBeDeletedPizza.remove();
    return toBeDeletedPizza;
  }

  async updatePizza(
    id: string,
    name: string,
    description: string,
    image_url: string,
    category: string,
    price: number,
    total_orders: number,
  ) {
    const toBeUpdatedPizza = await this.getSinglePizza(id);
    if (!toBeUpdatedPizza) throw new NotFoundException('Pizza not found');

    if(name) toBeUpdatedPizza.name = name
    if(description) toBeUpdatedPizza.description = description
    if(image_url) toBeUpdatedPizza.image_url = image_url
    if(category) toBeUpdatedPizza.category = category
    if(price) toBeUpdatedPizza.price = price
    if(total_orders) toBeUpdatedPizza.total_orders = total_orders

    toBeUpdatedPizza.save();
    
    return toBeUpdatedPizza;
  }
  async insertPizza(
    name: string,
    description: string,
    image_url: string,
    category: string,
    price: number,
    total_orders: number,
  ) {
    const newPizza = new this.pizzaModel({
      name,
      description,
      image_url,
      category,
      price,
      total_orders,
    });
    let result;
    try {
      result = await newPizza.save();
    } catch (e) {
      throw e;
    }
    return { status: 201, message: 'Created' };
  }
}
