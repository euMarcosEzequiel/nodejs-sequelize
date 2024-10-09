const Controller = require('./Controller.js');
const PessoaSevices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaSevices();

class PessoaController extends Controller{
    constructor() {
        super(pessoaServices);
    }
}

module.exports = PessoaController;