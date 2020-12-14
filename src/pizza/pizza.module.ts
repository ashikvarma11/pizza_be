import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PizzaController } from './pizza.controller';
import { PizzaSchema } from './pizza.model';
import { PizzaService } from './pizza.service';


@Module({
    imports:[MongooseModule.forFeature([{name:'Pizza',schema:PizzaSchema}])],
    controllers:[PizzaController],
    providers:[PizzaService]
})
export class PizzaModule {}
