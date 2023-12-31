# Nodejs web-development-tp-integ-back

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |


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
  Navigate to `http://localhost:8091`

- API Document endpoints

  swagger Spec Endpoint : http://localhost:8091/api-docs //TODO work in progress

  swagger-ui  Endpoint : http://localhost:8091/docs //TODO work in progress


# Node 
The main purpose of this repository is to show a project setup and workflow for writing microservice. The Rest APIs will be using the Swagger (OpenAPI) Specification.


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **config**               | Application configuration including environment-specific configs 
| **src/controllers**      | Controllers define functions to serve various express routes. 
| **src/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/repositories**     | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/services**         | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src**/index.js         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies   | 

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `build:copy`                   | copy the *.yaml file to dist/ folder      |
| `build:live`                   | Full build. Runs ALL build tasks       |
| `build:dev`                   | Full build. Runs ALL build tasks with all watch tasks        |
| `dev`                   | Runs full build before starting all watch tasks. Can be invoked with `npm dev`                                         |
| `test`                    | Runs build and run tests using mocha        |
| `lint`                    | Runs TSLint on project files       |


### Usages

- Database
Configuration is found in ./config/default.json
We should be able to connect to any local or remote database using mongoDb fields:
name: database name from local or remote cluster.
server: mongo db server name from cluster.
password: cluster/db password.

```
{
    "server": {
        "port": 8091,
        "hostname": "localhost"
    },
    "mongoDb": {
        "url": "mongodb://",
        "name": "fullstack-api-db",
        "server": "cluster0.loohc7m.mongodb.net",
        "password": "from_vault"
    },
    "TOKEN_KEY" : "random token key name"
}
```

- Postman env and endpoints collection: 
    https://github.com/morenolf/web-development-tp-integ-back/blob/main/postman_collection.json

    https://github.com/morenolf/web-development-tp-integ-back/blob/main/postman_dev_env.json

- Register a new user - generates token that will be populated to environment (access_token)
```
POST /users/register
```
- Body
```
{
    "name" : "Lucas",
    "email" : "lucas.123@123.com",
    "password" : "Lucas.12345"
}
```

- Logins a user - generates bearar token that will be populated to environment (access_token)
```
POST /users/login
```

- Retrieves cloth by page and limit - It needs a bearar token from Login or created user.
```
GET /cloth/{{type}}?page=1&limit=5
```

- Retrieves all the characters for given user - It needs a bearar token from Login or created user.
```
GET /characters/{{user_id}}
```

- Creates a character - It needs a bearar token from Login or created user.
```
POST /characters/{{user_id}}
```
- Body
```
{
    "name": "Lucas 123",
    "cloth": {
        "head": {
            "id": "578e5cbd5b080fbfb7bed3d0",
            "type": "head",            
            "name": "head name 123" , 
            "url": "image_123.jpg"
        },
        "body": {
            "id": "578e5cbd5b080fbfb7bed3d0",
            "type": "body",
            "name": "body name 123" , 
            "url": "image_body_123.jpg"
        },
        "legs": {
            "id": "578e5cbd5b080fbfb7bed3d0",
            "type": "legs",
            "name": "legs name 123" , 
            "url": "image_legs_123.jpg"
        },
        "feet": {
            "id": "578e5cbd5b080fbfb7bed3d0",
            "type": "feet",
            "name": "feet name 123" , 
            "url": "image_feet_123.jpg"
        }
    }
}
```

