import { MigrationInterface, QueryRunner } from 'typeorm';

export class patientsTable1622266644851 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE patient (
          id SERIAL PRIMARY KEY NOT NULL,identification varchar(20) NOT NULL,firstName varchar(255) NOT NULL, lastName varchar(255) NOT NULL, email varchar(255) NOT NULL, phone varchar(20))
      `);


    await queryRunner.query(`ALTER TABLE patient
        ADD CONSTRAINT patient_identification_uq UNIQUE (identification)
        `);

    await queryRunner.query(
      `CREATE INDEX patient_idx_01 ON patient (identification)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE patient CASCADE`);
  }
}