import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('varchar')
    description: string;

}