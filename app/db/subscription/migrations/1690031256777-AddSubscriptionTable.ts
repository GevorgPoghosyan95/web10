import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSubscriptionTable1690031256777 implements MigrationInterface {
    name = 'AddSubscriptionTable1690031256777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscriptions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "region" character varying NOT NULL, "deviceType" character varying NOT NULL, CONSTRAINT "PK_a98819993766819c043b332748d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subscriptions"`);
    }

}
