const {Flights}= require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {

    //So, this method of creating a function filter is called private function creation, and this is a good design to create a private function for creating filter, because we can use that function in multiple places and we can also change the logic of that function in one place, and it will reflect in all the places where we are using that function.
    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and]: [
                    {price: {[Op.gte]: data.minPrice}},
                    {price: {[Op.lte]: data.maxPrice}}
                ]
            })
             //Here and means -> between the range of minPrice and maxPrice
        }
        if(data.minPrice){
            Object.assign(filter, {price : {[Op.gte]: data.minPrice}});
            //Its a syntax basically used to assign the values when [] are involved, 
            //Here gte means -> greater than or equal to
        }
        if(data.maxPrice){
            Object.assign(filter, {price : {[Op.lte]: data.maxPrice}});
             //Here lte means -> less than or equal to
        }
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(flightid) {
        try {
            const flight = await Flights.findByPk(flightid);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            //in order to get the proper data that a customer needs, we need to have proper filter logic and building that logic in this block is not a good design to for, instead we will create a filter at the top of the function.
            const flightObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: flightObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports= FlightRepository;

/*
The filter query would be looking like this 
    where:{
            arrivalAirportId: 3,
            departureAirportId: 2,
            price: {[Op.gte]: 5000}
        }
*/

