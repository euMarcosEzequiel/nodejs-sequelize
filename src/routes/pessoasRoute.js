const { Router } = require("express");
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require("../controllers/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController('Pessoa');

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAllRegisters(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getRegisterById(req, res));
router.post('/pessoas', (req, res) => pessoaController.create(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

router.get('/pessoas/:id/matriculas', (req, res) => matriculaController.getMatriculas(req, res));

module.exports = router;