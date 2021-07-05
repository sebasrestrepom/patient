<p align="center">
  <img src="https://i.ibb.co/PcjR0NB/a201b38.png" width="220" alt="Search a Countries Logo" />
</p>

  <p align="center">API developed for the search a countries</p>

</p>

# Description

API developed at NodeJs to search a countries. Allows filter countries by region and by population, you can also indicate the number of fields you want to see per page and organize the information in ascending or descending order

To obtain the data, we make a Get-type request to the following URL https://restcountries.eu/rest/v2/all 

You can see the documentation at https://restcountries.eu/ 

This API was created with a model architecture of 3 layers

## System model

Next we will see an image that represents the model that the system executes, in order to understand its behavior

<p align="center">
  <img src="https://kroki.io/c4plantuml/svg/eNqVVNtu2zAMffdXcHlKAbfFgH1A0yboBU3i1SmKPRm0zcRCZcmT5HjBsH8fZcdJnAFFl5dINHl4eHSkG-vQuLqUwRehMlnnBHffkjutHApF5qryn4LnyY_l6ypZLaNkunxbjC_6yNvj6iF5nt3PFlMOBk44STAxWSEcZa42BFOBG4MlrLWB-1rkNKkqiHfWURkEERmr1RjzUqgQJt3faKKgjQjrDDqucxoKVDlDu4LAtsXAAdgKasBQpY2zV6OLHs86nkO5EOJ-MZrAPgh6DQg2K7SWDIcOGuQot3hXuoFCWMD1mpu7HTTCFWB1SZChIcbmFkHHPbnVtcrR7MbZV4Y_m2x0Ab8D4N9ByLGtkPNioTaSLiPcsExVNeLQaldRnBlRuesn3GK3DOGFMHP-e2T0lsGZlpTt_OtaZU5ohVI4wXGmvp_NtqIMtLOsEfoyYaChFFKjG0uGBxnSK3UqJCVYVdxy3m4-QxAW6MSWhjxBipLPPwdbp5ZaxT_ifCTYkYCctiKjc4rTdJyjwxQtcbfpfuk7x9-fYbDnublHzXOyOTatFNwbhGITluh5hGwoywyx5hPODHkmAqUN4WdN1md0WjJOLZ39R64Us3dSOeslvLmiRy-WFFkL_oFoCwZ_ikOYaq43R8CBgAcznaq2a3XiTszlz8GFs19uTCUKmXS3gmFml3Pe90b0cngDx_NVBDGZbXv2QfBCsr92nTNfLVmf_bBaRTGn-ITDPfpEysBAbaZv0-X46qFiPRTancpCeIqXi-tT2FO0_6pMbjk7WZDYFKk2J44ZorB5cwtro7t3pDHsV-9Kj9wBL1_mfoIe8jjomdwxg1qgSx9tEY40zk5myGBYV1t-GI7N_Wkx0A3n8Pv7F94p6Ao="  alt="Architecture diagram" />
</p>

## Architecture diagram

This API was developed under a 3 layer architecture model, where the controller, the service and the repository intervene

<p align="center">
  <img src="https://kroki.io/c4plantuml/svg/eNp9VNtu2zAMffdXcHkYUiBrXvYBzZKuTdG1XZJi2FMgy0zCVZY8iXZmDPv3UXIudQfML5Z5O-Thka8CK891abJ3ZLWpC4Tpx_XUlZWzaPmyiq7sfvL98Xm1_jZf3a7vr2-uH2bDiyxjYoMw8XpHjJprjzAjtfWqhI3zcFNTgZOqgmUbGEv4AJOnOYjBkFZMzmbZ1FlWZNEPN16OaIsRDD4fjjE0DMSwaitcak8Vj-9Uo7rjCBaoNIOSwO70IEUbjAlP3jWCHUAZA7xD2NRWR0RliEns7CCwzGo5pAKqKMlSYK_Y-QANqZhGHvaYQ-7dPqC_HFyc-53lwyIXpJlilauQUBdoVAcCRzMs9Q5LFb1LqSzItVQCj9sEJsFAVrgqU-IIdpIj3dS8A-0x9kfKhBH8rDHEiK5bqVMbDtLPuaH1J1fbQvl2qCoSuDdUDy7gdwbynDY71JLqnTHoJXx6-ugmCQx90y2FiCu5gXISGlugxKOUadAzyAJL-BFkIjHGxhPRsd3kOVnEG6MuYW6F9oJid9FItnEvZLdpX9r5DqyIFqGsIY1xAf0RDo7IbnfqqwWmRoXw3-7xF-qa8SSUvA7CZghg3Jb0v4geKxdIVtkmmo4fb3Dnol-_URrHpw7mDNVRlRHIohYY2VdPm23syaMqQO5PKYuNy03xr2QCB1NxEJlQyXEc7crSWdPCi3V7IbcDqtAHERtajWBU2-lYZkqDiWR7OjgT-hwwHKaPQSdHj4A3Qa996XYs4iTvYe_l_yCTpWvw9X78uPgiWX-yLCadL35PkKm0vO-Wjw_j29XqaRnlfiWB8Yf0F3gloDc=" width="420" alt="system model" />
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