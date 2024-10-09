const models = require('../models');

class Services {
    constructor(model){
        this.model = model;
    }

    async findAllRegisters() {
        return models[this.model].findAll();
    }

    async findRegisterById(id) {
        return models[this.model].findByPk(id);
    }

    async createRegister(data) {
      return models[this.model].create(data);
    }

    async updateRegister(newData, id){
        const updatedRegisterList = models[this.model].update(
            newData, { where: { id: id } }
        );

        // o método update do sequelize retorna uma array de números
        // esses números representam a quantidade de linhas alteradas
        if(updatedRegisterList[0] === 0){
            return false;
        }

        return true
    }

    async deleteRegister(id) {
        return models[this.model].destroy(
            { where: { id: id } }
        );
    }
}

module.exports = Services;