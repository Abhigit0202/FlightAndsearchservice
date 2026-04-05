const express = require('express');

const { FlightMiddleware } = require('../../middlewares/index');

const CityController = require('../../controller/city-controller');
const FlightController = require('../../controller/flight-controller');
const AirportController = require('../../controller/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post(
    '/flights', 
    FlightMiddleware.validateCreateFlight, 
    FlightController.create
);

//the above should be always first because if we have any request to create a flight and if that request doesn't have the mandatory properties, then we can directly return from the middleware without going to the controller, so it is always better to have the middleware before the controller in the route definition.
 
router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);
router.post('/airports', AirportController.create);



module.exports = router;