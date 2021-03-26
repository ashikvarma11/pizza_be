import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from './pizza/pizza.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://dbUser:dbUser@pizzaorder.rcjbc.mongodb.net/pizza_shop?retryWrites=true&w=majority`), PizzaModule, UserModule, AuthModule,OrdersModule],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
