import { Controller, Get, Post, Body, Delete, Param, Render } from '@nestjs/common';
import { OngDto } from './ong.dto';
import { OngsService } from './ongs.service';
import { Ong } from './ongs.entity';

@Controller('ongs')
export class OngsController {
    constructor (private ongService: OngsService) {}

    @Get()
    @Render('index')
    root() {
        return;
    }

    @Get('register')
    @Render('register')
    public register() {
        return;
    }

    @Get('list')
    list(): Promise<Ong[]> {
        return this.ongService.list();
    }

    @Post()
    @Render('profile')
    add(@Body() ongDto: OngDto): OngDto | {} {
        this.ongService.add(ongDto);
        return {ong: ongDto.username};
    }

    /*@Get(':name')
    findOne(@Param('name') name: string): Promise<Ong>{
        var ong = this.ongService.findOng(name); 
        return ong;
    }*/
    

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.ongService.remove(id);
    }
}
