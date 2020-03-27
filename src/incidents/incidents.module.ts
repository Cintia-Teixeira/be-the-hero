import { Module } from "@nestjs/common";
import { IncidentsController } from "./incidents.controller";
import { IncidentsService } from "./incidents.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Incident } from "./incidents.entity";

@Module(
{
    imports: [TypeOrmModule.forFeature([Incident])],
    controllers: [IncidentsController],
    providers: [IncidentsService]

})
export class IncidentsModule {}