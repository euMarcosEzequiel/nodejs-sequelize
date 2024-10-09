const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');
const MatriculaController = require("../controllers/MatriculaController.js");

const cursoController = new CursoController();
const matriculaController = new MatriculaController('Curso');

const router = Router();

router.get('/cursos', (req, res) => cursoController.getAllRegisters(req, res));
router.get('/cursos/:id', (req, res) => cursoController.getRegisterById(req, res));
router.post('/cursos', (req, res) => cursoController.create(req, res));
router.put('/cursos/:id', (req, res) => cursoController.update(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.delete(req, res));

router.get('/cursos/:id/matriculas', (req, res) => matriculaController.getMatriculas(req, res));

module.exports = router;