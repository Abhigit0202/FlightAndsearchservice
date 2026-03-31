const { City }=require('../models/index');
//doing this will put all the models in the models used in that folder


class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error){
            throw {error}; 
        }
    }

    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id: cityid
                }
            });
        }catch(error){
            throw {error}; 
        }
    }
}

module.exports= CityRepository;