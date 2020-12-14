import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
   private  validateToken = () => {
       const currentToken = localStorage.getItem('token');
       if(currentToken) return true;
       return false;
   }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    return this.validateToken();
  }

  
}