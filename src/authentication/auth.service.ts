import { Injectable } from "@nestjs/common";
import { OngsService } from "src/ongs/ongs.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private ongService: OngsService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.ongService.findOng(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}