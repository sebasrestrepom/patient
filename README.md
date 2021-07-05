<p align="center">
  <img src="https://i.ibb.co/PcjR0NB/a201b38.png" width="300" alt="Search a Countries Logo" />
</p>

  <p align="center">API developed for the search a countries</p>

</p>

# Description

API developed at NodeJs to search a countries. Allows filter countries by region and by population, you can also indicate the number of fields you want to see per page and organize the information in ascending or descending order

To obtain the data, we make a Get-type request to the following URL https://restcountries.eu/rest/v2/all  you can see the documentation at https://restcountries.eu/ 

## Architecture diagram

Next we will see a model of the system architecture

<p align="center">
  <img src="https://i.ibb.co/NLCJbQV/diagram.png" width="150" alt="system model" />
</p>

## ERM

The following diagram represents the entity relationship model designed for the operation of the API, it also shows how each table that compose it is constituted

<p align="center">
  <img src="https://kroki.io/erd/svg/eNptkM0OgyAQhO_7FJ4lHnwe0xgim5YExfJj07cv22UlNr3B7HwzC5PBXYe04pZu0FsDizcIm14RYFpserOqmm2-mtqgG4eh74gpaFwe3rsKk0YYE3RjL5uoSCe8-1DLavvhi2z9dhGfGWMTlYCUrgRoVaJwnbAg1I9ctk7ZnD-heL0zzemY5u8JV20d7DrGlw8GgI31TRxRwgLG7M4slilMJrPBVHJidVSRjrIRXQ7tcnkJT7niipd6zqbhWIcAkvEf-QCLS6lt"  alt="Architecture diagram" />
</p>

# Installation

For the installations you need to first haved install Docker, clone the repository and finally you need to install the npm packages

```bash
#Clone repository
$ git clone https://github.com/sebasrestrepomo/guideapp.git

#install npm packages
$ npm install

```

# Migrations

To give a better versioning to the database, use migrations. To execute them you must enter the following command

```bash

#Runing the migrations
$ npm run migration:run

```

# Running the app

For runing this App first you need run Docker, later run the application in development mode or in watch mode

```bash

# docker
$ docker-compose up

# development
$ npm run start

# watch mode
$ npm run start:dev

```

# Environment Variables
This API needs for its operation that we declare the following environment variables

```bash

#USERNAME
DATABASE_USERNAME=DATABASE_USERNAME

#PASSWORD
DATABASE_PASSWORD=DATABASE_PASSWORD

#HOST
DATABASE_HOST=DATABASE_HOST

#PORTS
DATABASE_PORT=DATABASE_PORT

#DATABASE NAME
DATABASE_NAME=DATABASE_NAME

```

# API Docs

For more information about methods present on this API visit:

```bash

# copy this url in your browser
http://localhost:3000/swagger/

```


### In the following image we will see a screenshot of the methods that we will find in Swagger

<p align="center">
  <img src="https://i.ibb.co/ZVwMyzP/methods.png" width="800"  alt="Methods of Api" />
</p>

### You can also see an example of the process to use a method of type post

<p align="center">
  <img src="https://i.ibb.co/JHKQDRj/Post-a-new-School.png" width="800"  alt="Example Method Post" />
</p>

# Test

You can test all the methods contained in this API, for this you must run the following command

```bash

# e2e tests
$ npm run test:e2e

```

## 🐞 Did you find some issue o improvment?

Feel free to contribute and do whatever to consider better to this project.