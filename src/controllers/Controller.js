class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAllRegisters(req, res){
        try {
            const list = await this.entityService.findAllRegisters();
            return res.status(200).json(list);
        } catch (error) {
            //erro
        }
    }

    async getRegisterById(req, res){
        const { id } = req.params;
        try{
            const register = await this.entityService.findRegisterById(Number(id));
            return res.status(200).json(register);
        }
        catch(error){
            //erro
        }
    }

    async create(req, res){
        const data = req.body;
        try {
            const newRegister = await this.entityService.createRegister(data);
            return res.status(200).json(newRegister);
        } catch (error) {
            //erro
        }
    }

    async update(req, res){
        const { id } = req.params;
        const newData = req.body;

        try {
            const isUpdated = await this.entityService.updateRegister(
                newData, 
                Number(id)
            );

            if(!isUpdated){
                return res.status(400).json({ message: "Error: update not complete!"});
            }

            return res.status(200).json({ message: "Update complete!"});
        } catch (error) {
            //erro
        }
    }

    async delete(req, res){
        const { id } = req.params;
        try {
            await this.entityService.deleteRegister(Number(id));
            return res.status(200).json({ message: "Delete complete!"})
        } catch (error) {
            //erro
        }
    }
}

module.exports = Controller; 