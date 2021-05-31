import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PatientRepository } from 'src/patients/repository/PatientRepository';
import { InMemoryPatientRepository } from 'src/patients/repository/InMemoryPatientRepository';
import { PatientController } from 'src/patients/controller/PatientController';
import { PatientService } from 'src/patients/service/PatientService';
import { Patient } from 'src/patients/model/Patient';

describe('PatientController (e2e)', () => {
  let app: INestApplication;
  let patientRepository: PatientRepository;

  beforeEach(async () => {
    patientRepository = new InMemoryPatientRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [PatientController],
      providers: [
        {
          provide: 'PatientRepository',
          useValue: patientRepository,
        },
        PatientService,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/patients/new-patient (POST)', async () => {
    const patient = new Patient(
      2,
      '23864549',
      'sebastian',
      'restrepo',
      'sebastia@gmail.com',
      '354214546',
    );

    await patientRepository.save(patient);
    await request(app.getHttpServer())
      .post('/patients/new-patient/')
      .send({
        identification: 23864549,
        firstName: 'sebastian',
        lastName: 'restrepo',
        email: 'sebastian@gmail.com',
        phone: '354214546',
      })
      .expect(201)
      .expect({
        id: 2,
        identification: 23864549,
        firstName: 'sebastian',
        lastName: 'restrepo',
        email: 'sebastian@gmail.com',
        phone: '354214546',
      });
  });

  test('/patients/get-all (GET)', () => {
    return request(app.getHttpServer())
      .get('/patients/get-all')
      .expect(200)
      .expect([
        {
          id: 1,
          identification: '32323',
          firstName: 'sebastian',
          lastName: 'restrepo',
          email: 'sebasrestrepom@gmail.com',
          phone: '3166195276',
        },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
