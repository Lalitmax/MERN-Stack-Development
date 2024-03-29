const productController = require('../Controller/product');
const express = require('express');
const server = express();
const router = express.Router();

router.post('/', productController.createNewProduct)
    .get('/', productController.readProducts)
    .get('/:id', productController.readProductById)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);


exports.router = router;