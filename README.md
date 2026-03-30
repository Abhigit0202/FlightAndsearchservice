/
    -src/
        index.js/
        models/
        controller/
        middlewares/
        services/
        utils/
        config/
        resps/
    -test/[later]
    


#Welcome to Flight Service

## Project Setup
- clone the project on your local.
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable
- `PORT=3000`
- Inside the `src/config` folder create a new file `config.josn` and then add the following piece of json.


```
"development": {
    "username": "root",
    "password": null,
    "database": "Flights_search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

```