//any Property that should be important to create a flight should be present in a request call in order to have successfully chance of processing the request, othewise that, Request will be taken down by Middlwares(important to address that, Properties like totalseats left aren't in the hands of end-user(so we can ignore that request or mandate to have)).
const { ClientErrorCodes }=require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
    ) {
        // if any of the body params is missing we come inside the if
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}