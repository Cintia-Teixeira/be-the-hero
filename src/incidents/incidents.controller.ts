import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { IncidentsService } from "./incidents.service";
import { Incident } from "./incidents.entity";
import { IncidentDto } from "./incident.dto";

@Controller('incidents')
export class IncidentsController {
    constructor (private incidentsService: IncidentsService) {}

    @Get()
    list(): Promise<Incident[]> {
        return this.incidentsService.list();
    }

    @Post()
    add(@Body() incidentDto: IncidentDto): IncidentDto {
        return this.incidentsService.add(incidentDto);
    }

    @Delete(':title')
    delete(@Param('title') title: string) {
        this.incidentsService.deleteIncident(title);
    }
}