import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService ) {}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAlluser() {
    const userList = await this.userService.getAllUsers();
    return userList as User[];
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getSingleuser(@Param('id') id: string): Promise<User> {
    const singleuser = await this.userService.getSingleUser(id);
    
    return singleuser as User;
    
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateuser(
    @Param('id') id: string,
    @Body('username') username: string,
    @Body('name') name: string,
    @Body('password') password: string,
    @Body('orders') orders: Array<any>,
  ): Promise<any> {
    const updateduser = await this.userService.updateUser(
      id,
      username,
      name,
      password,
      orders,
    );

    return updateduser;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteuser(@Param('id') id: string): Promise<any> {
    return this.userService.deleteUser(id);
  }

@Post(':userId/orders')
addUser(@Param('userId') userId:string, @Body('orderId') orderId: string): Promise<any> {
  return this.userService.addOrder(userId,orderId);
}

}
