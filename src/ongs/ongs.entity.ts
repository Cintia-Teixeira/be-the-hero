import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Incident } from "src/incidents/incidents.entity";

@Entity()
export class Ong {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @OneToMany(type => Incident, incident => incident.ong)
    incidents: Incident[];

}