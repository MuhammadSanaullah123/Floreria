const express = require('express');
const router = express.Router();
const {
  getAllMaterials,
  getShowingMaterials,
  getDiscountedMaterials,
  getStockOutMaterials,
  getMaterialById,
  getMaterialBySlug,
  addMaterial,
  addAllMaterials,
  updateMaterial,
  updateStatus,
  deleteMaterial,
} = require('../controller/materialController');

//add a product
router.post('/add', addMaterial);

//add multiple products
router.post('/all', addAllMaterials);

//get a product
router.post('/:id', getMaterialById);

//get showing products only
router.get('/show', getShowingMaterials);

//get discounted products only
router.get('/discount', getDiscountedMaterials);

//get all products
router.get('/', getAllMaterials);

//get all stock out products
router.get('/stock-out', getStockOutMaterials);

//get a product by slug
router.get('/:slug', getMaterialBySlug);

//update a product
router.put('/:id', updateMaterial);

//update a product status
router.put('/status/:id', updateStatus);

//delete a product
router.delete('/:id', deleteMaterial);


module.exports = router;
