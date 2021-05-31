<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png" width="320" alt="Patient Logo" />
</p>

[circleci-image]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png
[circleci-url]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png

  <p align="center">Developed at <a href="https://nestjs.com/" target="_blank">NestJs.</a> framework for building efficient and scalable server-side applications.</p>

 
</p>


# Description

API developed in NestJS for patient management within a hospital. It allows to post new patients and get a list of all those who are registered.


This API was created with a model architecture of 3 layers


<p align="center">
  [![image.png](https://i.postimg.cc/fLXHP3QX/image.png)](https://postimg.cc/Q98k9dtx)
</p>



<p align="center">
  <img src="https://i.postimg.cc/fLXHP3QX/image.png" alt="system model" />
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
