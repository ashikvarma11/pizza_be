import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}
  
  @Get(`/hello`)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post(`/auth/register`)
  register( @Body('username') username: string,
    @Body('name') name: string,
    @Body('password') password: string,
    @Body('orders') orders: Array<any>,): Promise<any> {
    return this.authService.register({username,name,password,orders});
  }
 
  @UseGuards(AuthGuard('local'))
  @Post(`/auth/login`)
  login(
    @Body('username') username: string,
    @Body('password') password: string): Promise<any> {
    return this.authService.login({username, password});
  }
}
