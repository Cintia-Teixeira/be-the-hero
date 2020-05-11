import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Ong } from "../ongs/ongs.entity";

@Entity()
export class Incident {

    @PrimaryColumn()
    title: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @ManyToOne(type => Ong, ong => ong.id, {nullable: false, onDelete: "CASCADE"})
    ong: Ong;

}