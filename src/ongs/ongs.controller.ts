import { Controller, Get, Post, Body } from '@nestjs/common';
import { OngDto } from './ong.dto';
import { OngsService } from './ongs.service';
import { Ong } from './ongs.entity';

@Controller('ongs')
export class OngsController {
    constructor (private ongService: OngsService) {}

    @Get()
    list(): Promise<Ong[]> {
        return this.ongService.list();
    }

    @Post()
    add(@Body() ongDto: OngDto): OngDto {
        this.ongService.add(ongDto);
        return ongDto;
    }
}
