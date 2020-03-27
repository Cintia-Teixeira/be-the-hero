import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OngsModule } from './ongs/ongs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ong } from './ongs/ongs.entity';

@Module({
  imports: [OngsModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'ongs.db',
    entities: [Ong],
    synchronize: true,
  })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
