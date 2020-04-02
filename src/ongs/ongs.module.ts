import { Module } from '@nestjs/common';
import { OngsController } from './ongs.controller';
import { OngsService } from './ongs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ong } from './ongs.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Ong])],
    controllers: [OngsController],
    providers: [OngsService],
    exports: [OngsService]
})
export class OngsModule {}
