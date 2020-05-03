import { Controller, Get, Post, Delete, Body, Param, UseGuards, Render } from "@nestjs/common";
import { IncidentsService } from "./incidents.service";
import { Incident } from "./incidents.entity";
import { IncidentDto } from "./incident.dto";
import { JwtAuthGuard } from "src/authentication/jwt-auth.guard";

@Controller('incidents')
export class IncidentsController {
    constructor (private incidentsService: IncidentsService) {}

    @Get()
    @Render('index')
    root () {
        return {message: "Faça seu logon"}
    }

    @Get()
    @Render('profile')
    list(): Promise<Incident[]> | {} {
        return this.incidentsService
        .list()
        .then((result) => result
        ? {incidents: result } 
        : {incidents: []});
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @Render('incidentAdded')
    add(@Body() incidentDto: IncidentDto): IncidentDto {
        return this.incidentsService.add(incidentDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':title')
    delete(@Param('title') title: string) {
        this.incidentsService.deleteIncident(title);
    }

    @Get(':ong_id')
    @Render('profile')
    findByOng(@Param('ong_id') id: number) {
        return this.incidentsService.findByOng(id)
        .then((result) => result
        ? {incidents: result } 
        : {incidents: []});
    }
}