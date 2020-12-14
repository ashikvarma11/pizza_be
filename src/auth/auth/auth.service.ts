import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Observable, from, of, UnsubscriptionError } from 'rxjs';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService, private readonly userService: UserService){}

    generateJWT(user: User) {
        return this.jwtService.sign({user});
    }

    validateJWT(token: string){
        return from(this.jwtService.verify(token));
    }

    hashPassword(password: string): Promise<any>{

        return new Promise((resolve,reject)=>{
            try {
                const hashedPwd = bcrypt.hash(password, 12);
                resolve(hashedPwd);
            } catch(e){
                reject(null);
            }
        })
        
        

    }

    comparePasswords(newPassword: string, passwordHash: string){
        return bcrypt.compare(newPassword, passwordHash);
    }

    async validateUser(username: string): Promise<any> {
        const user = await this.userService.getUserByUserName(username);
        const userExists = (user!==null)?true:false;
        return userExists?user:false;
      }

      async login({username,password}) {
        const user = await this.userService.getUserByUserName(username);
        if(user === null) return {status: 400, error: 'User doesnot exist'};
        const isPasswordsMatch = await this.comparePasswords(password, user.password)
        if(user!==null && isPasswordsMatch) {
            return {
                access_token: this.generateJWT(user),
                id:user._id
              };
        } else {
            return {status: 400, error: 'User doesnot exist'}
        }
      }

      async register(payLoadUser: any) {
        const userExists = await this.userService.checkUserExists(payLoadUser.username);
        if(userExists) return {status:400, error: `User Exists`};
        let newUser = await this.userService.createNewUser(payLoadUser);
        newUser.password = await this.hashPassword(payLoadUser.password)
        newUser.save();
        return {
            access_token: this.generateJWT(newUser),
            id:newUser._id
        };
        }
}