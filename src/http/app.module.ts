import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from '../ormconfig';
import { SaveANewPatientController } from 'src/http/controller/patient/save-a-new-patient/SaveANewPatientController';
import { SQLPatientRepository } from 'src/core/infrastructure/patient/SQLPatientRepository';
import { SaveANewPatient } from 'src/core/use_cases/patient/SaveANewPatient';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [SaveANewPatientController],
  providers: [
    { provide: 'PatientRepository', useClass: SQLPatientRepository },
    SaveANewPatient,
  ],
  exports: [],
})
export class AppModule {}
