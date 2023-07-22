import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientTable1690009506855 implements MigrationInterface {
    name = 'CreateClientTable1690009506855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "subscription_id" integer, "email" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
