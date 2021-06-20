import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Patient } from 'src/core/domain/patient/Patient';
import { PatientRepository } from 'src/core/domain/patient/PatientRepository';

@Injectable()
export class SaveANewPatient {
  constructor(
    @Inject('PatientRepository') private patientRepository: PatientRepository,
  ) {}

  async execute(
    identification: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
  ): Promise<Patient> {
    this.ensureIdentificationDontExist(identification);

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

  private async ensureIdentificationDontExist(identification) {
    const identificationValidate =
      await this.patientRepository.findByIdentification(identification);
    if (identificationValidate != undefined) {
      throw new HttpException(
        `Error, EL paciente con identificación:${identification} ya existe`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
