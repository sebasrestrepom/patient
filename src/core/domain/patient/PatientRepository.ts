import { Patient } from 'src/core/domain/patient/Patient';

export interface PatientRepository {
  save(patient: Patient): Promise<Patient>;
  findByIdentification(identification: string): Promise<Patient | undefined>;
  getAll(): Promise<Patient[]>;
}
