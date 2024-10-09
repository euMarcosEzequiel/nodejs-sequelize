const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

class MatriculaController extends Controller {
    constructor(model) {
        super();
        this.matriculaServices = new MatriculaServices(model);
    }
    
    async getMatriculas(req, res) {
        const { id } = req.params;
        try {
            const listMatriculas = await this.matriculaServices.findMatriculasByEntity(Number(id));
            return res.status(200).json(listMatriculas);
        } catch (error) {
            //erro
        }
    }
}

module.exports = MatriculaController;