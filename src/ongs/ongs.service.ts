import { Injectable, Get, Post } from '@nestjs/common';
import { Ongs } from './ongs';

@Injectable()
export class OngsService {
    private ong: Ongs[] = []

    @Get()
    list(): Ongs[] {
        return this.ong;
    }

    @Post()
    add(ong: Ongs) {
        this.ong.push(ong);
    }
}
