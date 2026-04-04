const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
           /* "Explaination of the above code"
           obj['a']=1,obj['b']=2,
           so, in order to add one more attribute to the data object, we can use spread operator and add the new attribute with its value, so that we can send the data to the repository layer with all the required attributes.

           do this
           obj={...obj, c:3}

           Result will be obj={a:1, b:2, c:3}
            */
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlightData(data){
       try {
        const flights = await this.flightrepository.getAllFlights(data);
        return flights;
       } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
        
       }
    }

}

module.exports = FlightService;

/*
{
flightnumber,
airplane id,
departure_airport_id,
arrival_airport_id,
arrivaltime,
departuretime,
price,
totalseats-> Airplane-> create a airplane repository and get the total seats from there
}
 */