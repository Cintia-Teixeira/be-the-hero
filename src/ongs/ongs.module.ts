import { Module } from '@nestjs/common';
import { OngsController } from './ongs.controller';
import { OngsService } from './ongs.service';

@Module({
    imports: [],
    controllers: [OngsController],
    providers: [OngsService] 
})
export class OngsModule {}
