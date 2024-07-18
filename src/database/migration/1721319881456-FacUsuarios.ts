import { MigrationInterface, QueryRunner } from 'typeorm';

export class FacUsuarios1721319881456 implements MigrationInterface {
  name = ' FacUsuarios1721319881456';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dim_usuarios" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "username" character varying(32) NOT NULL, "password" character varying NOT NULL, "verificado" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_00cd5db6a405f52433786493cdd" UNIQUE ("email"), CONSTRAINT "UQ_bee9612a915f0078921325cefbe" UNIQUE ("username"), CONSTRAINT "dim_usuarios_username_key" UNIQUE ("username"), CONSTRAINT "dim_usuarios_email_key" UNIQUE ("email"), CONSTRAINT "dim_usuarios_pkey" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "dim_rol" ("id" SERIAL NOT NULL, "rol" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "dim_rol_pkey" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "fac_usuarios" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_usuario" integer NOT NULL, "id_rol" integer NOT NULL, CONSTRAINT "REL_de809a2b980c8501f9f44937fa" UNIQUE ("id_usuario"), CONSTRAINT "fac_usuarios_pkey1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "fac_usuarios" ADD CONSTRAINT "fac_usuarios_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "dim_usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fac_usuarios" ADD CONSTRAINT "fac_usuarios_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "dim_rol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "fac_usuarios" DROP CONSTRAINT "fac_usuarios_id_rol_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fac_usuarios" DROP CONSTRAINT "fac_usuarios_id_usuario_fkey"`,
    );
    await queryRunner.query(`DROP TABLE "fac_usuarios"`);
    await queryRunner.query(`DROP TABLE "dim_rol"`);
    await queryRunner.query(`DROP TABLE "dim_usuarios"`);
  }
}
