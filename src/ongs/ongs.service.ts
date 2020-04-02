import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ong } from './ongs.entity';
import { Repository } from 'typeorm';
import { OngDto } from './ong.dto';

@Injectable()
export class OngsService {
    constructor (
        @InjectRepository(Ong)
        private ongsRepository: Repository<Ong>
    ) {}


    list(): Promise<Ong[]>{
        return this.ongsRepository.find();
    }

    add(ongDto: OngDto): OngDto {
        this.ongsRepository.save(ongDto);
        return ongDto;
    }

    findOng(name: string): Promise<Ong> {
        var ong = this.ongsRepository.findOne(Ong[name]);
        return ong;
    }

    remove(id: number){
        this.ongsRepository.delete(id)
        
    }
}