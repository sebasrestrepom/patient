import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { PatientController } from './patients/controller/PatientController';
import { SQLPatientRepository } from './patients/repository/SQLPatientRepository';
import { PatientService } from './patients/service/PatientService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [
   
    PatientController,
  ],
  providers: [
    { provide: 'PatientRepository', useClass: SQLPatientRepository },
   
    PatientService,
  ],
  exports: [],
})
export class AppModule {}