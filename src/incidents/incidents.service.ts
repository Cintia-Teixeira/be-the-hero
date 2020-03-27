import { Injectable } from "@nestjs/common";
import { IncidentDto } from "./incident.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Incident } from "./incidents.entity";

@Injectable()
export class IncidentsService {
    constructor (
        @InjectRepository(Incident)
        private incidentRepository: Repository<Incident>
    ) {}

    list(): Promise<Incident[]> {
        return this.incidentRepository.find();
    }

    add(incidentDto: IncidentDto): IncidentDto {
        this.incidentRepository.save(incidentDto);
        return incidentDto;
    }

    deleteIncident(title: string) {
        return this.incidentRepository.delete(title);
    }

}
