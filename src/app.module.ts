import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OngsModule } from './ongs/ongs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ong } from './ongs/ongs.entity';
import { IncidentsModule } from './incidents/incidents.module';
import { Incident } from './incidents/incidents.entity';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [OngsModule, IncidentsModule, AuthModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'ongs.db',
    entities: [Ong, Incident],
    synchronize: true,
  })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
