import { Body, Controller, Post, Get } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { GetAllPatient } from 'src/core/use_cases/patient/GetAllPatient';
import { GetAllPatientResponse } from './GetAllPatientResponse';

@ApiTags('patients')
@Controller()
export class GetAllPatientController {
  constructor(private getAllPatient: GetAllPatient) {}

  @Get('patients/get-all')
  @ApiOperation({ summary: 'Lista de todos los pacientes registrados' })
  async handle(): Promise<GetAllPatientResponse[]> {
    const patients = await this.getAllPatient.execute();

    const response: GetAllPatientResponse[] = patients.map((patient) => {
      return {
        id: patient.id,
        identification: patient.identification,
        firstname: patient.firstName,
        lastname: patient.lastName,
        email: patient.email,
        phone: patient.phone,
      };
    });

    return response;
  }
}
