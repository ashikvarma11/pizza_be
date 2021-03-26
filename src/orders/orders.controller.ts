import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './orders.service';

@Controller('/orders')
export class OrdersController {

    constructor(private readonly orderService: OrderService) {

    }

    @Post()
    async addOrder(
        @Body('order') order: any
    ): Promise<any> {
        let orderSaved = await this.orderService.addOrder(order);
        return orderSaved;
    }

    @Get(':id')
    async getSingleUserOrder(
        @Param('Id') id: string,
    ): Promise<any> {
        return {
            id,order
        }
    } 
    @Get()
    async getAllUserOrders(): Promise<any> {
        return {
        }
    }
  @Delete(':id')
  deleteOrder(@Param('id') id: string): Promise<any> {
    return ;
  }
}
