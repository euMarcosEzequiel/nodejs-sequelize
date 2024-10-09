const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.getAllRegisters(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.getRegisterById(req, res));
router.post('/categorias', (req, res) => categoriaController.create(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.update(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.delete(req, res));

module.exports = router;