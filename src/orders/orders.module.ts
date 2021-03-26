import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersController } from './orders.controller';
import { OrdersSchema } from './orders.model';
import { OrderService } from './orders.service';

@Module({
    imports:[MongooseModule.forFeature([{name:'Orders',schema:OrdersSchema}])],
    controllers:[OrdersController],
    providers:[OrderService]
})
export class OrdersModule {}
