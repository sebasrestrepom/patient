<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png" width="320" alt="Patient Logo" />
</p>

[circleci-image]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png
[circleci-url]: https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Patient_logo_2019.svg/1200px-Patient_logo_2019.svg.png

  <p align="center">Developed at <a href="https://nestjs.com/" target="_blank">NestJs.</a> framework for building efficient and scalable server-side applications.</p>

 
</p>


## Description

API developed in NestJS for patient management within a hospital. It allows to post new patients and get a list of all those who are registered.


## Installation

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

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# docker
$ docker-compose up
```

## Test

```bash

# e2e tests
$ npm run test:e2e

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
