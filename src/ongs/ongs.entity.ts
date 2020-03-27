import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}