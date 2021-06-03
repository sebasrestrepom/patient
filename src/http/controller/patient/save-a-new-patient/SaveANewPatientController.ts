import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SaveANewPatient } from 'src/core/use_cases/patient/SaveANewPatient';
import { SaveANewPatientRequest } from './SaveANewPatientRequest';
import { SaveANewPatientResponse } from './SaveANewPatientResponse';

@ApiTags('patients')
@Controller()
export class SaveANewPatientController {
  constructor(private saveANewPatient: SaveANewPatient) {}

  @Post('patients/new-patient')
  @ApiOperation({ summary: 'Creación de un nuevo paciente' })
  async handle(
    @Body() request: SaveANewPatientRequest,
  ): Promise<SaveANewPatientResponse> {
    const patient = await this.saveANewPatient.execute(
      request.identification,
      request.firstName,
      request.lastName,
      request.email,
      request.phone,
    );
    return {
      id: patient.id,
      identification: patient.identification,
      firstName: patient.firstName,
      lastName: patient.lastName,
      email: patient.email,
      phone: patient.phone,
    };
  }
}
