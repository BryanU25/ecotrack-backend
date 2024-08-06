import { MigrationInterface, QueryRunner } from "typeorm";

export class  Founts1722918140869 implements MigrationInterface {
    name = ' Founts1722918140869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dim_founts" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "CO2" numeric NOT NULL, "CH4_F" numeric NOT NULL, "N2O_F" numeric NOT NULL, "CH4_M" numeric NOT NULL, "N2O_M" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_subcategory" integer, CONSTRAINT "dim_founts_name_key" UNIQUE ("nombre"), CONSTRAINT "dim_founts_pkey" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dim_categories" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "dim_categories_name_key" UNIQUE ("name"), CONSTRAINT "dim_categories_pkey" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dim_subcategories" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_category" integer, CONSTRAINT "dim_subcategories_name_key" UNIQUE ("name"), CONSTRAINT "dim_subcategories_pkey" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fac_calculations" ("id" SERIAL NOT NULL, "huellaCalculada" numeric NOT NULL, "date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer, "subcategoryId" integer, "fountId" integer, CONSTRAINT "fac_calculations_pkey1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dim_founts" ADD CONSTRAINT "dim_founts_id_subcategory_fkey" FOREIGN KEY ("id_subcategory") REFERENCES "dim_subcategories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dim_subcategories" ADD CONSTRAINT "dim_subcategories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "dim_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fac_calculations" ADD CONSTRAINT "FK_9f084c5ad022ee58eb7783f14b9" FOREIGN KEY ("categoryId") REFERENCES "dim_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fac_calculations" ADD CONSTRAINT "FK_204738df2e18104e390ad23d5ed" FOREIGN KEY ("subcategoryId") REFERENCES "dim_subcategories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fac_calculations" ADD CONSTRAINT "FK_68813d48cd2026a64b4f80ff64d" FOREIGN KEY ("fountId") REFERENCES "dim_founts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fac_calculations" DROP CONSTRAINT "FK_68813d48cd2026a64b4f80ff64d"`);
        await queryRunner.query(`ALTER TABLE "fac_calculations" DROP CONSTRAINT "FK_204738df2e18104e390ad23d5ed"`);
        await queryRunner.query(`ALTER TABLE "fac_calculations" DROP CONSTRAINT "FK_9f084c5ad022ee58eb7783f14b9"`);
        await queryRunner.query(`ALTER TABLE "dim_subcategories" DROP CONSTRAINT "dim_subcategories_id_category_fkey"`);
        await queryRunner.query(`ALTER TABLE "dim_founts" DROP CONSTRAINT "dim_founts_id_subcategory_fkey"`);
        await queryRunner.query(`DROP TABLE "fac_calculations"`);
        await queryRunner.query(`DROP TABLE "dim_subcategories"`);
        await queryRunner.query(`DROP TABLE "dim_categories"`);
        await queryRunner.query(`DROP TABLE "dim_founts"`);
    }

}
