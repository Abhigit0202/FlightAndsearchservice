class CrudRepository{
    constructor(model){
        this.model=model;
    }//used this here because we have multiple models and we want to use the same functions for all the models, so we can pass the model as a parameter in the constructor and use it in the functions.
    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error){
            console.log("Something went wrong in the Crud-layer");
            throw {error};
        }
    }
    async destroy(modelId){
        try {
            await this.model.destroy({
                where:{
                    id : modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the Crud-layer");
            throw {error};
        }
    }

    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the Crud-layer");
            throw {error};
        }
    }
    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in the Crud-layer");
            throw {error};
        }
    }

    async update(modelId,data){
        try {
            const model = await this.model.update(data, {
                where: {
                    id: modelId
                },
        }); 
        } catch (error) {
            console.log("Something went wrong in the Crud-layer");
            throw {error};
        }
    }
}

module.exports=CrudRepository;