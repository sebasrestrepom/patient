import { Body, Controller, Post, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { PatientService } from 'src/patients/service/PatientService';


class SavePatientResponse {
  id: number;
  identification: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

class SavePatientRequest {
  @IsNotEmpty()
  @IsNumber()
  identification: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  phone: string;
}

class GetAllResponse {
  id: number;
  identification: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Controller()
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('patients/new-patient')
  async savePatient(
    @Body() request: SavePatientRequest,
  ): Promise<SavePatientResponse> {
    const patient = await this.patientService.savePatient(
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

  @Get('patients/get-all')
  async getAll(): Promise<GetAllResponse[]> {
    const patients = await this.patientService.getAll();

    const response: GetAllResponse[] = patients.map((patient) => {
      return {
        id: patient.id,
        identification: patient.identification,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        phone: patient.phone,
      };
    });
    return response;
  }
}
