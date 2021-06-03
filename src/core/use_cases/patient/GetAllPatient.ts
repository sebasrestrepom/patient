import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Patient } from 'src/core/domain/patient/Patient';
import { PatientRepository } from 'src/core/domain/patient/PatientRepository';

@Injectable()
export class GetAllPatient {
  constructor(
    @Inject('PatientRepository') private patientRepository: PatientRepository,
  ) {}

  execute(): Promise<Patient[]> {
    return this.patientRepository.getAll();
  }
}
