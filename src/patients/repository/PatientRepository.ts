import { Patient } from 'src/patients/model/Patient';

export interface PatientRepository {
  save(patient: Patient): Promise<Patient>;
  findByIdentification(identification: string): Promise<Patient | undefined>;
  getAll(): Promise<Patient[]>;
}
