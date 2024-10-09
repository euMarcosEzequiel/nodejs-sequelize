const Services = require('./Services.js');

class MatriculasServices extends Services {
    constructor(model) {
        super(model);
    }

    async findMatriculasByEntity(id) {
        const matriculas = await super.findRegisterById(id);
        const listMatriculas = await matriculas.getMatriculas();
        return listMatriculas;
    }
}

module.exports = MatriculasServices;