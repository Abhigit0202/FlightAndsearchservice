const AirportService = require('./airport-services');
const CrudServices = require('./crud-services');

module.exports= {
    CityService : require('./city-services'),
    FlightService :require('./flight-services'),
    AirportService: require('./airport-services'),
    //Also providing crud service logic(if some request needs it)
    CrudServices: require('./crud-services')
}