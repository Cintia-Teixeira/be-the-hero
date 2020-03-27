import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OngsModule } from './ongs/ongs.module';

@Module({
  imports: [OngsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
