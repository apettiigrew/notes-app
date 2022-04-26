# Nodejs Express + TypeScript Demo Project

This project is a simple node.js Restful Api written with Express.js + TypeScript to demonstrate typical CRUD operations in a RESTful API with MongoDB.

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT           | Defined the port the server will be listening on         | 8081 |
|NODE_ENV           | Defines the environment the server will run in i.e (development, production, staging)       | development     |
|MONGODB_CONNECTION_STRING           | A connection string            | "*"      |
|APP_SECRET           | Used for the jwt token            |    |
|APP_TITLE           | App Title to be used for the api           | express-typescript-server      |



# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8081`

# TypeScript + Node 
The main purpose of this repository is to show a project setup and workflow for writing microservice using express + typescript + mongoose.

## Testing
The tests are  written in Jest

```
npm test
```
