import { Injectable, Get, Post } from '@nestjs/common';
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


    list(): Promise<Ong[]>{
        return this.ongsRepository.find();
    }

    add(ongDto: OngDto): OngDto {
        this.ongsRepository.save(ongDto);
        return ongDto;
    }
}
