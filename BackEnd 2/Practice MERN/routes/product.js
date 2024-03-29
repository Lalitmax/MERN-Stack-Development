import express  from "express";
 
import productController from '../Controller/product.js';
const router = express.Router();

 
router.post('/', productController.createNewProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.replaceProduct);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;