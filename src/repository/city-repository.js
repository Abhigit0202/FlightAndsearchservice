const { City }=require('../models/index');
//doing this will put all the models in the models used in that folder


class CityRepository{

    async createCity({name}){
        try {
            const city=await City.create({
                name:name // first name represent the model property "name"
            });
            return city;
        } catch (error){
            console.log("Something went wrong");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id : cityId
                }
            })
        } catch (error) {
            console.log("Something went wrong");
            throw {error};
        }
    }

    async updateCity(cityId){
        try {
            const city= await City.update(data, {
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            
        }
    }

    async getCity(cityId){
        try {
            // const city=await City.findone({
            //     where:{
            //         id: cityId
            //     }
            // }) or
            const city=await City.findbyPk(cityId);//above and this function is same
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw {error};
        }
    }

}

module.exports= CityRepository;