import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Pizza } from './pizza.model';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async getAllPizza() {
    const pizzaList = await this.pizzaService.getAllPizza();
    return pizzaList as Pizza[];
  }

  @Get(':id')
  async getSinglePizza(@Param('id') id: string): Promise<Pizza> {
    const singlePizza = await this.pizzaService.getSinglePizza(id);
    return singlePizza as Pizza;
  }

  @Post()
  async insertPizza(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('image_url') image_url: string,
    @Body('size') size: string,
    @Body('category') category: string,
    @Body('price') price: number,
  ): Promise<any> {
    return this.pizzaService.insertPizza(
      name,
      description,
      image_url,
      size,
      category,
      price
    );
  }

  @Patch(':id')
 async updatePizza(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('image_url') image_url: string,
    @Body('size') size: string,
    @Body('category') category: string,
    @Body('price') price: number
  ): Promise<any> {
    const updatedPizza = await this.pizzaService.updatePizza(
      id,
      name,
      description,
      image_url,
      size,
      category,
      price
    );

    return updatedPizza;
  }

  @Delete(':id')
  deletePizza(@Param('id') id: string): Promise<any> {
    return this.pizzaService.deletePizza(id);
  }
}
