import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('subscriptions')
export class SubscriptionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    region: string;

    @Column()
    deviceType: string;
}