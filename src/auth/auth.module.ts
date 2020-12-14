import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './auth.constants';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
    imports:[
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
          }),
    ],
    providers: [AuthService,LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
