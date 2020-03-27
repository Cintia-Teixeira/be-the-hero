import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Incident {

    @PrimaryColumn()
    title: string;

    @Column()
    description: string;

    @Column()
    value: number;

}