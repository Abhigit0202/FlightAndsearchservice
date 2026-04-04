// If we are using this const "variable name" manner then, we can directly excess the objects, else we have to use {} braces to get the attributes and variables.
module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository')
}
//We are using index.js just to accumulate all the repo of repository in one place, just to send all the repos to different from one file