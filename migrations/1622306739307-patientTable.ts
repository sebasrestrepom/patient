import { MigrationInterface, QueryRunner } from 'typeorm';

export class patientsTable1622266644851 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE patient (
          id SERIAL PRIMARY KEY NOT NULL,identification varchar(20) NOT NULL,firstName varchar(255) NOT NULL, lastName varchar(255) NOT NULL, email varchar(255) NOT NULL, phone varchar(20))
      `);

    await queryRunner.query(`ALTER SEQUENCE patient_id_seq RESTART WITH 1`);

    await queryRunner.query(`ALTER TABLE patient
        ADD CONSTRAINT UQ_patient_identification UNIQUE (identification)
        `);

    await queryRunner.query(
      `CREATE INDEX patient_idx_01 ON patient (identification)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE patient CASCADE`);
  }
}