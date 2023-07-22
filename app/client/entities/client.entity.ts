import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity('clients')
export default class ClientEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    email: string;
}