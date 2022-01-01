const router = require('express').Router();
const productController = require('../product_v2/controller');


router.get('/product', productController.index)
router.get('/product/:id', productController.view)
router.get('/product?search', productController.index)
router.post('/product', productController.store)
router.put('/product/:id', productController.update)
router.delete('/product/:id', productController.destroy)

module.exports = router;