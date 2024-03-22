const fs = require('fs');
const model = require('../model/product')
const Product =  model.Product;

exports.createNewProduct= async (req, res) => {
    try {
        const product  = new Product(req.body);

        // product.title = 'Infinix note 12 turbo'
        // product.description = 'An Infinix mobile which is nothing like Infinix'
        // product.price = 10234
        // product.discountPercentage = 1200
        // product.rating = 4.5
        // product.stock=89
        // product.brand = 'Infinix'
        // product.category ='SmartPhone'

        const savedProduct = await product.save();
         
       



        res.status(201).json({ message: 'Product created successfully',savedProduct });
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        res.status(500).json({ error: 'Internal server error',error });
    }
}

exports.readProducts= async (req, res) => {
    const products = await Product.find({price:{$lt:10200}});
    res.json(products);
}

exports.readProductById=(req, res) => {
    try {
        const id = +req.params.id;
        const product = products.find(p => p.id === id);
        console.log(product, id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.replaceProduct= (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        products.splice(productIndex, 1, { ...req.body, id: id });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.updateProduct=(req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        const product = products[productIndex];
        products.splice(productIndex, 1, { ...product, ...req.body });

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteProduct= (req, res) => {
    try {
        const id = +req.params.id;
        const productIndex = products.findIndex(p => p.id === id);
        const product = products[productIndex];
        products.splice(productIndex, 1);

        res.status(200).json({"deleted ":  product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}