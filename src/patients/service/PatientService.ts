import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Patient } from 'src/patients/model/Patient';
import { PatientRepository } from 'src/patients/repository/PatientRepository';

@Injectable()
export class PatientService {
  constructor(
    @Inject('PatientRepository') private patientRepository: PatientRepository,
  ) {}

  async savePatient(
    identification: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
  ): Promise<Patient> {
    const identificationValidate =
      await this.patientRepository.findByIdentification(identification);
    if (identificationValidate != undefined) {
      throw new HttpException(
        `Error, EL paciente con identificación:${identification} ya existe`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const patient = new Patient(
      undefined,
      identification,
      firstName,
      lastName,
      email,
      phone,
    );
    return this.patientRepository.save(patient);
  }

  getAll(): Promise<Patient[]> {
    return this.patientRepository.getAll();
  }
}
