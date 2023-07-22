import { MigrationInterface, QueryRunner } from "typeorm"
import {subscriptionPlanData} from "../subscription-plan.data";

export class SubscriptionsSeed1690032937123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        subscriptionPlanData.map(async (d) => {
            await queryRunner.query(`INSERT INTO subscriptions ("name", "price","region","deviceType") VALUES ('${d.name}', '${d.price}', '${d.region}', '${d.deviceType}');`);
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE subscriptions;`);
    }

}
