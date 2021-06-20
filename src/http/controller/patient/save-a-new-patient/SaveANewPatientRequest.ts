import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class SaveANewPatientRequest {
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
