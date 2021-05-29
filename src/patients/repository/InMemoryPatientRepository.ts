import { Patient } from 'src/patients/model/Patient';
import { PatientRepository } from './PatientRepository';

export class InMemoryPatientRepository implements PatientRepository {
  private _database = new Map<string, Patient>();

  save(patient: Patient): Promise<Patient> {
    const newIndex = this._database.size + 1;
    const newPatient = new Patient(
      newIndex,
      patient.identification,
      patient.firstName,
      patient.lastName,
      patient.email,
      patient.phone,
    );

    this._database.set(`${newPatient.id}`, newPatient);

    return Promise.resolve(newPatient);
  }

  findByIdentification(identification: string): Promise<Patient | undefined> {
    const myarray = [...this._database.values()];
    const patients = myarray.filter(
      (patient) => patient.identification === identification,
    );
    if (patients == undefined || patients.length == 0) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(patients[0]);
  }

  getAll(): Promise<Patient[]> {
    const list: Patient[] = [];

    list.push(
      new Patient(
        1,
        '32323',
        'sebastian',
        'restrepo',
        'sebasrestrepom@gmail.com',
        '3166195276',
      ),
    );

    return Promise.resolve(list);
  }
}
