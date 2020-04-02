import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { OngsModule } from "src/ongs/ongs.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports:
        [OngsModule, PassportModule,
            JwtModule.register({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]

})
export class AuthModule { }