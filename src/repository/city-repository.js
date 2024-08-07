const {City} = require(`../models/index`);
//responsible for communicating with any data source can be db or from somewhere else we r fetching
//fetching the data not creating any issue

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch (error){
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            });
            return true;
        }catch(error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id : cityId
                }
            });
                 return city;   
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);//does query on primary key
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = CityRepository;