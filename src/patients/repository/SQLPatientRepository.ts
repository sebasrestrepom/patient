import { InjectEntityManager } from '@nestjs/typeorm';
import { Patient } from 'src/patients/model/Patient';
import { EntityManager } from 'typeorm';
import { PatientRepository } from './PatientRepository';

export class SQLPatientRepository implements PatientRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async save(patient: Patient): Promise<Patient> {
    const result = await this.manager.query(
      `INSERT INTO patient (identification, firstName, lastName, email, phone) VALUES ($1,$2,$3,$4,$5)`,
      [
        patient.identification,
        patient.firstName,
        patient.lastName,
        patient.email,
        patient.phone,
      ],
    );

    const newPatient = new Patient(
      result.insertId,
      patient.identification,
      patient.firstName,
      patient.lastName,
      patient.email,
      patient.phone,
    );
    return newPatient;
  }

  async findByIdentification(identification: string): Promise<Patient> {
    const rows = await this.manager.query(
      `SELECT id, identification, firstName, lastName, email, phone FROM patient WHERE identification=$1`,
      [identification],
    );

    if (rows == undefined || rows.length == 0) {
      return undefined;
    }

    const result = new Patient(
      rows[0].id,
      rows[0].identification,
      rows[0].firstname,
      rows[0].lastName,
      rows[0].email,
      rows[0].phone,
    );
    return result;
  }

  async getAll(): Promise<Patient[]> {
    const rows = await this.manager.query(
      `SELECT id, identification, firstName, lastName, email, phone FROM patient`,
    );
    const result = rows.map(
      (row) => new Patient(row.id, row.identification, row.firstName, row.lastName, row.email, row.phone),
    );
    return Promise.resolve(result);
  }
}
