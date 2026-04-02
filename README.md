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




## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
    
    Since, its a One to many relationship, we can say that City won't be storing the info about Airports as A city can have Multiple Airports,
    But a Airport can have only one city, that is why we have to mention city_id