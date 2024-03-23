import { query } from 'express';
import Product from '../model/product.js'
import fs from 'fs'
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))


const createNewProduct = async (req, res) => {
    try {

        const item = req.body;
         
        const newProduct =new Product(item);
        const savedNewProduct = await newProduct.save();
         
        res.status(201).json({ message: 'Product created successfully',savedNewProduct })

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }

}

const getAllProducts = async (req, res) => {
    try {
        const allProducts   = await Product.find();
        res.json(allProducts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.status(404).json({ error: 'product not found' })
        } else {
            
            res.json(product)
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }


}

const replaceProduct = async (req, res) => {
    try {
        const newitem = req.body;
        const id = req.params.id;

        // Find and replace the product in the database
        const replacedProduct = await Product.findOneAndReplace({ _id: id }, newitem);

        if (!replacedProduct) {
            // If product is not found, return 404 error
            return res.status(404).json({ error: 'Product not found' });
        }

        // If product is successfully replaced, return success message
        res.status(200).json({ message: 'Product replaced successfully', newitem });
    } catch (error) {
        // Handle any internal server errors
        res.status(500).json({ error: 'Internal server error' });
    }
};


const updateProduct = async (req, res) => {
    try {
        const newitem = req.body;
        const id = req.params.id;
        const updatedProduct = await Product.updateOne({ _id: id }, newitem );

        if (!updatedProduct) {
            res.status(404).json({ error: 'Product not found' });
        } else {
             
            res.status(200).json({ message: 'Product updated successfully', updatedProduct: updatedProduct });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        // Delete the product from the database
        const result = await Product.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            // If no document was deleted, return 404 error
            return res.status(404).json({ error: "Product not found" });
        }

        // If product is successfully deleted, return success message
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        // Handle any internal server errors
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default {
    deleteProduct,
    updateProduct,
    replaceProduct,
    getProductById,
    getAllProducts,
    createNewProduct
};