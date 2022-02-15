import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, BaseEntity} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("contact")
export class Contact extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'first_name', nullable: false})
    firstName: string;

    @Column({name: 'last_name', nullable: false})
    lastName: string;


    @Column()
    email: string;
    
    @Column({name: 'phone_number', nullable: false})
    phoneNumber: string;

    @Column({ type: 'int' })
    age: number;
}
