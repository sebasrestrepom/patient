import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { PatientController } from './http/controller/patient/save-a-new-patient/SaveANewPatientController';
import { SQLPatientRepository } from './core/infrastructure/patient/SQLPatientRepository';
import { PatientService } from './core/use_cases/patient/SaveANewPatient';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [PatientController],
  providers: [
    { provide: 'PatientRepository', useClass: SQLPatientRepository },
    PatientService,
  ],
  exports: [],
})
export class AppModule {}
