const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const authenticate = require('../middlewares/authenticate');

// TODO add authenticate - problem with decode token
router.post('/cats', catController.createCat);
router.get('/cats', catController.getAllCats);
router.get('/cats/:id', catController.getCatById);
router.put('/cats/:id', catController.updateCatById);
router.delete('/cats/:id', catController.deleteCatById);

module.exports = router;