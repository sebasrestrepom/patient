<h1 align="center">Search a countries</h1>
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
  <img src="https://i.ibb.co/TH4qjgp/diagram.png" width="300" alt="system model" />
</p>

# Installation

For the installations you need to first clone the repository and finally you need to install the npm packages

```bash
#Clone repository
$ git clone https://github.com/condor-labs/be-search-sebasrestrepom.git

#install npm packages on the src folder
$ npm install

```

# Running the app

To run the application you must add the following command in the console

```bash

# run application
$ npm run start

```

# API Docs

For more information about methods present on this API visit:

```bash

# copy this url in your browser
http://localhost:4000/docs/

```
### You can also test the application endpoints remotely at the following url: https://searchcountries2.herokuapp.com/docs/ 

In the following image we will see a screenshot of the methods that we will find in Swagger

<p align="center">
  <img src="https://i.ibb.co/ZVwMyzP/methods.png" width="800"  alt="Methods of Api" />
</p>

You can also see an example of the process to use a method of type post

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