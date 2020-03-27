import { Injectable, Get, Post } from '@nestjs/common';
import { Ongs } from './ongs';
import { InjectRepository } from '@nestjs/typeorm';
import { Ong } from './ongs.entity';
import { Repository } from 'typeorm';
import { OngDto } from './ong.dto';

@Injectable()
export class OngsService {
    constructor (
        @InjectRepository(Ong)
        private ongsRepository: Repository<Ong>,
    ) {}


    @Get()
    list(): Promise<Ong[]>{
        return this.ongsRepository.find();
    }

    @Post()
    add(ongDto: OngDto) {
        this.ongsRepository.save(ongDto);
    }
}
