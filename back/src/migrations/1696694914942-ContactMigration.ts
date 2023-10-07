import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactMigration1696694914942 implements MigrationInterface {
    name = 'ContactMigration1696694914942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fullName" varchar(45) NOT NULL, "email" varchar(60) NOT NULL, "telephone" varchar(18) NOT NULL, "registerDate" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, "profileImage" varchar(120), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage") SELECT "id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fullName" varchar(45) NOT NULL, "email" varchar(60) NOT NULL, "telephone" varchar(18) NOT NULL, "registerDate" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, "profileImage" varchar(120), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage") SELECT "id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fullName" varchar(45) NOT NULL, "email" varchar(60) NOT NULL, "telephone" varchar(18) NOT NULL, "registerDate" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, "profileImage" varchar(120), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage") SELECT "id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fullName" varchar(45) NOT NULL, "email" varchar(60) NOT NULL, "telephone" varchar(18) NOT NULL, "registerDate" datetime NOT NULL DEFAULT (datetime('now')), "clientId" integer, "profileImage" varchar(120), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage") SELECT "id", "fullName", "email", "telephone", "registerDate", "clientId", "profileImage" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
    }

}
