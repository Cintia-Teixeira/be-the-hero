import { Controller, Get, Post, Body } from '@nestjs/common';
import { OngDto } from './ong.dto';
import { OngsService } from './ongs.service';

@Controller('ongs')
export class OngsController {
    constructor (private ongService: OngsService) {}

    @Get('ongs')
    list() {
        return this.ongService.list();
    }

    @Post()
    add(@Body() ongDto: OngDto){
        return this.ongService.add(ongDto);
    }
}
