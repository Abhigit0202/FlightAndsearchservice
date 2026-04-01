const { CityService } = require('../services/index');


const cityService = new CityService();
/*
* POST
* data-> req.body
 */

const create = async (req, res)=>{
    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}
// DELETE-> city/:id
const destroy = (req, res)=>{
    try {
        const response = cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    }
}
//GET ->/city/;id
const get = (req, res)=>{
    try {
        const city = cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a city",
            err: error
        })
    }
}
//patch ->/city/;id -> req.body
const update = (req, res)=>{
    try {
        const city = cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}
