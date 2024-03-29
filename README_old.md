<p align="center">
  <img src="https://i.ibb.co/PcjR0NB/a201b38.png" width="320" alt="search country Logo" />
</p>

  <p align="center">API for the search a countries</p>

 
</p>


# Description

API developed in NestJS for patient management within a hospital. It allows to post new patients and get a list of all those who are registered.


This API was created with a model architecture of 3 layers


## System model
Next we will see an image that represents the model that the system executes, in order to understand its behavior
<p align="center">
  <img src="https://i.ibb.co/G0FRgJh/arquitectura.png"  alt="Architecture diagram" />
</p>


## Architecture diagram
This API was developed under a 3 layer architecture model, where the controller, the service and the repository intervene
<p align="center">
  <img src="https://i.ibb.co/09tpcdq/Imagen2.png" width="320" alt="system model" />
</p>





# Installation
For the installations you need to first clone the repository, later you need to install the npm packages, finally you need to install docker. 

```bash
#Clone repository
$ git clone https://github.com/sebasrestrepomo/patient.git

#install npm packages
$ npm install

#install Docker
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
$ sudo groupadd docker
$ sudo usermod -aG docker $USER

#install docker compose
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose

#reboot computer
$ sudo reboot
```

# Running the app
 You can run the application in development mode or in watch mode, you must also initialize docker.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# docker
$ docker-compose up
```

# API Docs
 For more information about methods present on this API visit:

```bash
# copy this url in your browser
http://localhost:3000/docs/

```

# Test

```bash

# e2e tests
$ npm run test:e2e

```

## 🐞 Did you find some issue o improvment?
Feel free to contribute and do whatever to consider better to this project.
