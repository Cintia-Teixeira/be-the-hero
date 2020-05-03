import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from "typeorm";
import { Incident } from "src/incidents/incidents.entity";
import * as bcrypt from 'bcrypt';

@Entity()
export class Ong {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @OneToMany(type => Incident, incident => incident.ong)
    incidents: Incident[];



}