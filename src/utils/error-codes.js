const ClientErrorCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORISED: 401,
    NOT_FOUND: 404
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
});

//using object.freeze to stop other factors from changing the values of the object, so that we can maintain the integrity of the error codes throughout the application, and avoid any accidental changes that might lead to inconsistencies in error handling.

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}